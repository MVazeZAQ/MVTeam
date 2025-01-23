from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIClient
from rest_framework import status
from inotesapp.models import Note

class NoteTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.note_data = {
            "title": "Test Note",
            "body": "This is a test note body.",
            "category": "PERSONAL"
        }
        self.note = Note.objects.create(
            title="Sample Note",
            body="This is a sample note.",
            category="BUSINESS"
        )

    def test_create_note_success(self):
        """Test creating a new note"""
        response = self.client.post(reverse('notes'), self.note_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['title'], self.note_data['title'])
        self.assertEqual(response.data['category'], self.note_data['category'])

    def test_retrieve_all_notes(self):
        """Test retrieving all notes"""
        response = self.client.get(reverse('notes'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['title'], self.note.title)

    def test_retrieve_single_note_success(self):
        """Test retrieving a single note by slug"""
        response = self.client.get(reverse('note-detail', kwargs={'slug': self.note.slug}))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], self.note.title)

    def test_update_note_success(self):
        """Test updating a note"""
        updated_data = {
            "title": "Updated Note Title",
            "body": "Updated body content.",
            "category": "IMPORTANT"
        }
        response = self.client.put(
            reverse('note-detail', kwargs={'slug': self.note.slug}),
            updated_data,
            format='json'
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.note.refresh_from_db()
        self.assertEqual(self.note.title, updated_data['title'])
        self.assertEqual(self.note.category, updated_data['category'])

    def test_delete_note_success(self):
        """Test deleting a note"""
        response = self.client.delete(reverse('note-detail', kwargs={'slug': self.note.slug}))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(Note.objects.filter(slug=self.note.slug).exists())

    def test_search_notes(self):
        """Test searching notes by title, body, or category"""
        search_query = "sample"
        response = self.client.get(reverse('notes-search'), {'search': search_query})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['title'], self.note.title)

    def test_create_note_invalid(self):
        """Test creating a note with invalid data"""
        invalid_data = {"title": "", "body": ""}
        response = self.client.post(reverse('notes'), invalid_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
