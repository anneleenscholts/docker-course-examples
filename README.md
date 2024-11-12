### **Cursus Syllabus: "Docker en Kubernetes voor IT-professionals"**

**Overzicht**:  
Deze cursus van 2 sessies is gericht op IT-professionals die Docker willen begrijpen voor dagelijkse ontwikkeling, debugging en hoe Docker samenwerkt met Kubernetes. Aan het einde van de cursus hebben deelnemers praktische kennis van Docker, het gebruik en het oplossen van problemen met containers in reële scenario's, en hoe Docker past in Kubernetes voor containerorkestratie.

---

### **Sessie 1: Docker in het Dagelijks Gebruik & Debugging**
- **Duur**: 4 uur  
- **Doel**: Deelnemers vertrouwd maken met het dagelijks gebruik van Docker in hun ontwikkelwerk, van het bouwen en beheren van containers tot het oplossen van problemen en optimaliseren van deze containers.

---

#### **1. Introductie tot Docker (30 minuten)**
   - Wat is Docker en waarom is het belangrijk?
   - Kernconcepten: Images, Containers, Dockerfile, en Registry
   - Hoe past Docker in DevOps en moderne IT-praktijken?
   - Overzicht van de Docker-architectuur (Client, Docker Daemon, Docker Hub)

   **Praktisch**:
   - Installeren en opzetten van Docker op lokale machines.
   - Runnen van een "Hello World"-container.

#### **2. Docker Images Bouwen en Beheren (45 minuten)**
   - Structuur van een Dockerfile en best practices
   - Optimaliseren van Docker images (multi-stage builds, verkleinen van image size)
   - Caching van lagen in Docker builds
   - Beheren van images: taggen, versies en verwijderen van oude/ongebruikte images

   **Praktisch**:
   - Schrijf een eenvoudige Dockerfile en bouw een image.
   - Push de image naar Docker Hub of een private registry.

#### **3. Werken met Docker Containers (1 uur)**
   - Begrijpen van de levenscyclus van een container: starten, stoppen, herstarten, killen
   - Basiscommando's om containers te beheren (`docker run`, `docker ps`, `docker exec`)
   - Mounten van volumes en het beheren van persistente data in containers
   - Exposen van poorten en netwerken tussen containers
   - Container logging (`docker logs`)

   **Praktisch**:
   - Runnen van een containerized webapplicatie en deze lokaal toegankelijk maken.
   - Mounten van een volume om data te bewaren.

#### **4. Debugging van Docker Containers en Images (1 uur 15 minuten)**
   - Debuggen van draaiende containers (`docker exec`, `docker inspect`, `docker logs`)
   - Veelvoorkomende problemen begrijpen en oplossen: container crashes, netwerkproblemen, permissieproblemen
   - Analyseren van Docker logs
   - Opruimen van ongebruikte resources (`docker prune`, `docker system df`)
   - Inspecteren van Docker image-lagen en grote lagen identificeren

   **Praktisch**:
   - Probleem oplossen met een defecte container (bijv. crashende app, verkeerde poorten).
   - Analyseren en debuggen van veelvoorkomende Docker-problemen (volume niet gemount, verkeerde environment variables).

#### **5. Best Practices voor Dagelijks Gebruik van Docker (30 minuten)**
   - Tips voor het integreren van Docker in je dagelijkse workflow
   - Automatiseren van Docker builds en het runnen van containers
   - Gebruik van `docker-compose` voor multi-container applicaties
   - Security tips: minimaliseren van kwetsbaarheden in images en het beveiligen van gevoelige data

   **Praktisch**:
   - Gebruik `docker-compose` om een multi-container applicatie te runnen (bijv. een webapplicatie met een database).
   - Overzicht van security scanning tools (zoals Docker Bench, Clair).

---

### **Sessie 2: Docker in Productie en Integratie met Kubernetes**
- **Duur**: 4 uur  
- **Doel**: Het uitbreiden van de Docker-kennis naar Kubernetes, met de nadruk op containerorkestratie, schalen en het beheren van applicaties in Kubernetes-clusters.

---

#### **1. Samenvatting van Docker Kernconcepten (30 minuten)**
   - Korte samenvatting van de onderwerpen uit Sessie 1: images, containers, debugging en best practices
   - De rol van Docker in moderne cloud-native applicaties

#### **2. Introductie tot Kubernetes (1 uur)**
   - Wat is Kubernetes en waarom wordt het gebruikt in productieomgevingen?
   - Kernconcepten van Kubernetes: Pods, Deployments, Services, ConfigMaps en Secrets
   - Kubernetes-architectuur: Master Node, Worker Nodes, etcd, kube-scheduler, kube-proxy, kubelet
   - Docker en Kubernetes: hoe containers worden beheerd in een Kubernetes-cluster

   **Praktisch**:
   - Verkenning van Kubernetes-architectuur via `kubectl`.
   - Opzetten van een lokale Kubernetes-cluster (met Minikube of Docker Desktop Kubernetes).

#### **3. Docker Containers Deployen naar Kubernetes (1 uur)**
   - Kubernetes YAML-configuratiebestanden schrijven (Pod, Deployment, Service)
   - Gebruik van Docker images in Kubernetes: `imagePullPolicy`, private registries
   - Schalen van applicaties met Deployments
   - Beheren van de levenscyclus van applicaties in Kubernetes: rolling updates en rollbacks

   **Praktisch**:
   - Deploy een Docker-gebaseerde applicatie naar Kubernetes.
   - Voer een rolling update en rollback uit.

#### **4. Debugging van Containers in Kubernetes (1 uur)**
   - Logs analyseren in Kubernetes (`kubectl logs`)
   - Troubleshooting van Pods (`kubectl describe pod`, `kubectl exec`)
   - Monitoren van containergezondheid met Liveness en Readiness Probes
   - Veelvoorkomende problemen met containers in Kubernetes oplossen (bijv. image pull errors, resource limits)

   **Praktisch**:
   - Debug een defecte Kubernetes Pod en herstel deze.
   - Stel health checks in voor een draaiende container.

#### **5. Kubernetes Netwerken en Service Discovery (30 minuten)**
   - Begrijpen van Kubernetes Services (ClusterIP, NodePort, LoadBalancer)
   - Netwerken tussen containers in een Kubernetes-cluster
   - Introductie tot Ingress voor HTTP/S-routing

   **Praktisch**:
   - Stel een LoadBalancer Service in voor een gedeployde applicatie.
   - Configureer een Ingress resource voor HTTP-verkeer naar de applicatie.

#### **6. Best Practices voor Kubernetes (30 minuten)**
   - Optimaliseren van container resources (CPU, geheugen) in Kubernetes
   - Containers automatisch schalen met de Horizontal Pod Autoscaler
   - Beveiligen van applicaties: RBAC, Namespaces en Network Policies
   - Beheren van secrets en gevoelige data

   **Praktisch**:
   - Configureer een Deployment in Kubernetes met resource-limieten.
   - Maak en gebruik Kubernetes Secrets en ConfigMaps.

---

### **Cursusafsluiting & Q&A (15 minuten)**
   - Samenvatting van de belangrijkste concepten en praktische toepassingen
   - Beantwoorden van specifieke vragen of uitdagingen van deelnemers
   - Hulpmiddelen voor verdere zelfstudie (Kubernetes-documentatie, Docker best practices)

---

### **Belangrijkste Leerdoelen**:
1. **Sessie 1** richt zich op het beheersen van Docker voor dagelijkse taken zoals het bouwen, debuggen en optimaliseren van gecontaineriseerde applicaties.
2. **Sessie 2** verdiept de Docker-kennis door deze te integreren met Kubernetes voor het schalen, orkestreren en beheren van gecontaineriseerde applicaties in productieomgevingen.

**Vereiste voorkennis**:
- Basiskennis van Linux command-line en netwerkconcepten
- Enige ervaring met applicatieontwikkeling of systeembeheer

---

### **Aanvullende Bronnen**:
- Docker officiële documentatie: https://docs.docker.com/
- Kubernetes officiële documentatie: https://kubernetes.io/docs/
- Tools: Docker Compose, Minikube, kubectl, Helm