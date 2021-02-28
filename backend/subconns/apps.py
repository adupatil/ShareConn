from django.apps import AppConfig


class SubconnsConfig(AppConfig):
    name = 'subconns'

    def ready(self):
        import subconns.signals
