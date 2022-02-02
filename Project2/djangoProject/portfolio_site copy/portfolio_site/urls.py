from django.contrib import admin
from django.urls import path, include
# from blog import views
# from quote_generator import views 
from portfolio import views

# from exchange_rate import views as exchangeView
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', views.index, name='index'),
    # path('exchange/', exchangeView.index, name ="exchangeView"),
    path('', views.home, name='home'),
    path('blog/', include('blog.urls')),
    # path('about/', views.about,name='about'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
