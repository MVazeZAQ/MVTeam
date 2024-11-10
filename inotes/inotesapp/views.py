from django.shortcuts import render

from inotesapp.models import Note
from inotesapp.serializers import NoteSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

@api_view(['GET','POST'])
def notes(request):
    if request.method == 'GET':
        notes = Note.objects.all()
        serizalizer = NoteSerializer(notes, many = True)
        return Response(serizalizer.data)
    elif request.method == 'POST':
        serizalizer = NoteSerializer(data=request.data)
        if serizalizer.is_valid():
            serizalizer.save()
            return Response(serizalizer.data,status=status.HTTP_201_CREATED)
        return Response(serizalizer.errors,status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'PUT', 'DELETE'])
def note_detail(request, slug):
    try:
        note = Note.objects.get(slug=slug)
    except Note.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = NoteSerializer(note)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = NoteSerializer(note, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        note.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)