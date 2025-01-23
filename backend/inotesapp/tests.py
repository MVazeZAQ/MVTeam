from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIClient
from rest_framework import status
from inotesapp.models import Note
from django.utils.text import slugify
from django.core.exceptions import ValidationError

class NoteModelTests(TestCase):
    def setUp(self):
        self.note = Note.objects.create(title="Test Note", body="Body of the test note")

    def test_note_str_representation(self):
        """Test the string representation of a Note object"""
        self.assertEqual(str(self.note), "Test Note")

    def test_slug_generation(self):
        """Test that the slug is generated correctly"""
        self.assertIsNotNone(self.note.slug)
        self.assertEqual(self.note.slug, slugify("Test Note"))

    def test_unique_slug_generation(self):
        """Test that the slug is unique for duplicate titles"""
        duplicate_note = Note.objects.create(title="Test Note", body="Duplicate body")
        self.assertNotEqual(self.note.slug, duplicate_note.slug)

    def test_category_default_value(self):
        """Test that the default category is 'PERSONAL'"""
        self.assertEqual(self.note.category, "PERSONAL")

class NoteEdgeCaseTests(TestCase):
    def test_empty_title(self):
        """Test creating a note with an empty title"""
        note = Note(title="", body="This is a body")
        with self.assertRaises(ValidationError):
            note.full_clean()  # Validate the model instance

    def test_long_title(self):
        """Test creating a note with a very long title"""
        long_title = "A" * 101  # Exceeding max_length of 100
        note = Note(title=long_title, body="This is a body")
        with self.assertRaises(ValidationError):
            note.full_clean()  # Validate the model instance

class NoteAPITests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.note1 = Note.objects.create(title="Meeting Notes", body="Work meeting")
        self.note2 = Note.objects.create(title="Personal Journal", body="My thoughts")
        self.valid_data = {"title": "Valid Note", "body": "This is valid", "category": "PERSONAL"}
        self.invalid_data = {"title": "", "body": "Missing title"}

    def test_get_all_notes(self):
        """Test retrieving all notes"""
        response = self.client.get(reverse("notes"))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)

    def test_create_note_valid_payload(self):
        """Test creating a note with valid payload"""
        response = self.client.post(reverse("notes"), self.valid_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data["title"], "Valid Note")

    def test_create_note_invalid_payload(self):
        """Test creating a note with invalid payload"""
        response = self.client.post(reverse("notes"), self.invalid_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("title", response.data)

    def test_update_note(self):
        """Test updating an existing note"""
        response = self.client.put(reverse("note-detail", kwargs={"slug": self.note1.slug}),
                                   {"title": "Updated Note", "body": "Updated body"}, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["title"], "Updated Note")

    def test_delete_note(self):
        """Test deleting a note"""
        response = self.client.delete(reverse("note-detail", kwargs={"slug": self.note1.slug}))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(Note.objects.filter(slug=self.note1.slug).exists())

class SearchNotesTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.note1 = Note.objects.create(title="Meeting Notes", body="Work meeting")
        self.note2 = Note.objects.create(title="Personal Journal", body="My thoughts")

    def test_search_no_results(self):
        """Test search returns no results"""
        response = self.client.get(reverse("notes-search"), {"search": "Random"})
        self.assertEqual(len(response.data), 0)

    def test_search_partial_match(self):
        """Test search with partial match"""
        response = self.client.get(reverse("notes-search"), {"search": "meet"})
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]["title"], "Meeting Notes")

    def test_search_case_insensitive(self):
        """Test case-insensitive search"""
        response = self.client.get(reverse("notes-search"), {"search": "meeting"})
        self.assertEqual(len(response.data), 1)


