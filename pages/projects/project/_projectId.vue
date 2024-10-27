<template>
    <div class="container mx-auto mt-10 sm:mt-20">
      <!-- Project header -->
      <ProjectHeader :singleProjectHeader="project" />
  
      <!-- Project gallery -->
      <ProjectGallery :projectImages="projectData.projectImages" />
  
      <!-- Project information -->
      <ProjectInfo :projectInfo="projectInfo" />
  
      <!-- Project related projects -->
      <ProjectRelatedProjects :relatedProject="relatedProject" />
    </div>
  </template>
  
  <script setup>
  import { onMounted, onUpdated, ref, computed, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import feather from 'feather-icons';
  
  import ProjectHeader from '~/components/projects/ProjectHeader.vue';
  import ProjectGallery from '~/components/projects/ProjectGallery.vue';
  import ProjectInfo from '~/components/projects/ProjectInfo.vue';
  import ProjectRelatedProjects from '~/components/projects/ProjectRelatedProjects.vue';
  
  import projects from '~/data/projects';
  import projectsData from '~/data/projects-data';
  
  const route = useRoute();
  
  // Reactive data properties
  const project = ref({});
  const projectData = ref({});
  const relatedProject = ref({
    relatedProjectsHeading: 'Related Projects',
    relatedProjects: projects,
  });
  
  // Computed property for project information
  const projectInfo = computed(() => projectData.value.projectInfo);
  
  // Fetch project data based on route parameter
  const fetchProjectData = () => {
    const projectId = route.params.projectId;
    
    project.value = projects.find((p) => p.id == projectId) || {};
    projectData.value = projectsData.find((data) => data.project_id == projectId) || {};
  };
  
  onMounted(() => {
    feather.replace();
    fetchProjectData();
  });
  
  onUpdated(() => {
    feather.replace();
  });
  
  // Watch for route changes to update project data
  watch(
    () => route.params.projectId,
    (newProjectId) => {
      fetchProjectData(newProjectId);
    }
  );
  </script>
  
  <style scoped></style>
  