import os
from django.core.management.base import BaseCommand
from users.models import Users

class Command(BaseCommand):
    help = 'Create an admin user'

    def handle(self, *args, **kwargs):
        if not Users.objects.filter(username=os.environ.get('ADMIN_USER')).exists():
            user = Users.objects.create_user(
                username=os.environ.get('ADMIN_USER'),
                email=os.environ.get('ADMIN_EMAIL'),
                password = os.environ.get('ADMIN_PASSWORD')
            )
            user.is_superuser = True
            user.is_staff = True
            user.save()
            
            self.stdout.write(self.style.SUCCESS('Successfully created admin user'))
        else:
            self.stdout.write(self.style.WARNING('Admin user already exists'))