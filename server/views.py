from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from .utils import updateNote, getNoteDetail, deleteNote, getNotesList, createNote
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


# Signup
@api_view(['POST'])
def signup_view(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if User.objects.filter(username=username).exists():
        return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        User.objects.create_user(username=username, password=password)
        user = authenticate(username=username, password=password)
        token = get_tokens_for_user(user)
        return Response({'token': token, 'message': 'User created successfully'}, status=status.HTTP_201_CREATED)
    except Exception as e:
        # Handle specific exception types if necessary
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)


# Login
@api_view(['POST'])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)
    if user:
        token = get_tokens_for_user(user)
        return Response({'token': token}, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Invalid Credentials'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST', 'PUT'])
@permission_classes([IsAuthenticated])
def getNotes(request):
    if request.method == 'GET' or request.method == 'PUT':
        return getNotesList(request)

    elif request.method == 'POST':
        return createNote(request)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def getNote(request, note_number):
    if request.method == 'GET':
        return getNoteDetail(request, note_number)

    if request.method == 'PUT':
        return updateNote(request, note_number)

    if request.method == 'DELETE':
        return deleteNote(request, note_number)
