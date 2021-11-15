from django.db import models


WeekDays = models.IntegerChoices(
    'WeekDays',
    '''
        Monday
        Tuesday
        Wednesday
        Thursday
        Friday
        Saturday
        Sunday
    '''
)


class Subject(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f'{ self.name }'


class Teacher(models.Model):
    name = models.CharField(max_length=50)
    avatar = models.ImageField(upload_to='uploads/teacher/avatar/%Y/%m/%d/', blank=True, null=True)
    email = models.EmailField(max_length=254)
    whatsapp = models.CharField(max_length=16)
    bio = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{ self.name }'


class Class(models.Model):
    teacher = models.ForeignKey(Teacher, related_name='teacher_class', on_delete=models.CASCADE)
    subject = models.ForeignKey(Subject, related_name='subject_class', on_delete=models.CASCADE)
    cost = models.DecimalField(max_digits=5, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{ self.subject } - RS{ self.cost }'

    class Meta:
        verbose_name = 'Class'
        verbose_name_plural = 'Classes'


class Schedule(models.Model):
    week_day = models.SmallIntegerField(choices=WeekDays.choices)
    reference_class = models.ForeignKey(Class, on_delete=models.CASCADE)
    time_start = models.IntegerField()
    time_end = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{ self.reference_class.teacher } - { self.reference_class }'


class Connection(models.Model):
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
