<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'I am an experienced Laravel and Vue.js developer with a passion for building high-quality web applications. With a Bachelor of Science in Computer Science and a demonstrated history of working in the computer software industry, I bring a wealth of knowledge and expertise to every project I work on.',
				},
				{
					id: 2,
					bio:
						'My technical skills include proficiency in PHP, Laravel, Vue.js, and Nuxt.js, as well as HTML and CSS. I am always eager to learn new technologies and keep up with the latest trends in web development, so that I can deliver the best possible solutions to my clients. But technical skills are just one part of what makes me an effective developer. I am also a great communicator, able to work closely with clients to understand their needs and provide solutions that meet or exceed their expectations. I am adaptable and able to work well under pressure, even in fast-paced environments. And I thrive in collaborative environments, where I can work as part of a team to bring ideas to life.',

				},
				{
					id: 2,
					bio:
						'If you are looking for a talented and dedicated web developer who can bring your ideas to life, I did love to hear from you. Please feel free to contact me to learn more about my experience and how I can help you achieve your goals.',

				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.jpg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
