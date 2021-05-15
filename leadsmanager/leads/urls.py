from rest_framework import routers, urlpatterns 
from .views import LeadViewSet

router = routers.DefaultRouter()
router.register('leads', LeadViewSet, 'leads')

urlpatterns = router.urls