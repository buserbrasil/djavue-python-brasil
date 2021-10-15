from django.contrib import admin

from core.models import ActivityLog, Todo, Tweet


class ActivityLogAdmin(admin.ModelAdmin):
    list_display = ('type', 'logged_user', 'created_at')


class TodoAdmin(admin.ModelAdmin):
    list_display = ('description', 'done')


@admin.register(Tweet)
class TweetAdmin(admin.ModelAdmin):
    list_display = ('author_name', 'author_username', 'created_at')
    fields = ('author_name', 'author_username', 'author_avatar', 'created_at', 'text')


admin.site.register(ActivityLog, ActivityLogAdmin)
admin.site.register(Todo, TodoAdmin)
