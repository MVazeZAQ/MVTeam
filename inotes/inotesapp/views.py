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