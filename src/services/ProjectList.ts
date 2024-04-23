import {Project} from "../model/Project.ts";

class ProjectList{

    function getProjects(): Project[]{
        return [
            new Project(
                "LaunchPad",
                "",
                "",
                "",
                "",
                "https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/integrations/nuxt/colored-logo.png"
            ),
            new Project(
                "ArgoCD",
                "Argo CD is a declarative continuous delivery tool for Kubernetes. It can be used as a standalone tool or as a part of your CI/CD workflow to deliver needed resources to your clusters.",
                "",
                "https://argo-cd.readthedocs.io/en/stable/",
                "",
                "https://miro.medium.com/v2/resize:fit:1400/1*An25ihShzJkhL3jAwUaWfg.png"
            ),
            new Project(
                "KeyCloak",
                "Keycloak is a single sign on solution for web apps and RESTful web services. The goal of Keycloak is to make security simple so that it is easy for application developers to secure the apps and services they have deployed in their organization",
                "",
                "https://www.keycloak.org/",
                "",
                "https://static-00.iconduck.com/assets.00/keycloak-icon-2048x2048-5ge904so.png"
            ),
            new Project(
                "Traefik",
                "Traefik is a leading modern reverse proxy and load balancer that makes deploying microservices easy. Traefik integrates with your existing infrastructure components and configures itself automatically and dynamically.",
                "",
                "https://traefik.io/traefik/",
                "",
                "https://upload.wikimedia.org/wikipedia/commons/1/1b/Traefik.logo.png"
            )
        ]
    }

}