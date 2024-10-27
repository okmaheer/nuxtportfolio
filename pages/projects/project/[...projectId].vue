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
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import feather from 'feather-icons';

import ProjectHeader from '~/components/projects/ProjectHeader.vue';
import ProjectGallery from '~/components/projects/ProjectGallery.vue';
import ProjectInfo from '~/components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '~/components/projects/ProjectRelatedProjects.vue';

import projects from '~/composables/projects.js';
import projectsData from '~/composables/projects-data';

const route = useRoute();

const project = ref({});
const projectData = ref({});
const relatedProject = ref({
  relatedProjectsHeading: 'Related Projects',
  relatedProjects: projects,
});

// Computed property for project information
const projectInfo = computed(() => projectData.value.projectInfo || {});

// Fetch project data based on route parameter
const fetchProjectData = () => {
  const projectId = route.params.projectId;

  // Find the project by ID or default to an empty object
  project.value = projects.find((p) => p.id == projectId) || {};
  
  // Find the projectData or set a default structure to avoid errors
  projectData.value = projectsData.find((data) => data.project_id == projectId) || {
    projectImages: [],
    projectInfo: {
      clientHeading: '',
      companyInfos: [],
      objectivesHeading: '',
      objectivesDetails: '',
      projectCredentialsTitle: '',
      projectCredentialsInfo: [],
      technologies: [{ title: '', techs: [] }],
      socialSharingsHeading: '',
      socialSharings: [],
      projectDetailsHeading: '',
      projectDetails: []
    }
  };
};

onMounted(() => {
  if (import.meta.client) feather.replace();
  fetchProjectData();
});

watch(
  () => route.params.projectId,
  (newProjectId) => {
    fetchProjectData(newProjectId);
  }
);
</script>

<style scoped></style>
