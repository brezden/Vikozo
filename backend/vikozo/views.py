from vikozo.models import User
from django.http import JsonResponse
from vikozo.serializers import UserSerializer

def users(request):
    data = User.objects.all()
    serializer = UserSerializer(data, many=True)
    return JsonResponse({'users': serializer.data})