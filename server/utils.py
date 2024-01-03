from rest_framework.response import Response
from .models import Note
from .serializers import NoteSerializer


def getNotesList(request):
    notes = Note.objects.filter(user=request.user).order_by('-updated')
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)


def getNoteDetail(request, note_number):
    notes = Note.objects.get(note_number=note_number, user=request.user)
    serializer = NoteSerializer(notes, many=False)
    return Response(serializer.data)


def createNote(request):
    data = request.data
    user = request.user

    latest_note = Note.objects.filter(user=user).order_by('-note_number').first()
    next_sequential_number = 1 if latest_note is None else latest_note.note_number + 1

    note = Note.objects.create(
        user = request.user,
        note_number = next_sequential_number,
        body = data['body']
    )
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)

def updateNote(request, note_number):
    data = request.data
    note = Note.objects.get(note_number=note_number, user=request.user)
    serializer = NoteSerializer(instance=note, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


def deleteNote(request, note_number):
    note = Note.objects.get(note_number=note_number, user=request.user)
    note.delete()
    return Response('Note was deleted!')
