<template>
  <div ref="menuRef" class="overlay-menu row">
    <div
      class="menu_inner row"
      role="link"
      tabindex="0"
      @mouseover="$emit('change-mouse', '#022c14')"
      @focus="$emit('change-mouse', '#022c14')"
    >
      <section class="profile">
        <div class="picture">
          <img :src="profileImageUrl" alt="Aluko Brown" />
        </div>

        <div class="contact">
          (+234) 803 354 9393 <br />
          alukoayomiposi@gmail.com
          <br />
          <span class="social-icons">
            <SocialIcon
              alt="LinkedIn"
              icon="/images/icons/linkedin-green.svg"
              url="https://www.linkedin.com/in/aluko-brown/"
            />
            <SocialIcon
              alt="Twitter"
              icon="/images/icons/twitter-green.svg"
              url="https://twitter.com/AlukoBrown"
            />
            <SocialIcon
              alt="Instagram"
              icon="/images/icons/instagram-green.svg"
              url="https://www.instagram.com/alukobrown/"
            />
            <SocialIcon
              alt="Dribble"
              icon="/images/icons/dribble-green.svg"
              url="https://dribbble.com/alukobrown"
            />
          </span>
          <p>
            <a
              href="https://drive.google.com/file/d/1kFRqgNI1SCUrv9PzmXNOrGYp9_Ug23Kt/view?usp=drivesdk"
              rel="noreferrer"
              class="row cv"
              target="_blank"
            >
              View my CV
              <img src="/images/icons/arrow-right.svg" alt="Arrow Right" />
            </a>
          </p>
          <p></p>
        </div>
      </section>
      <nav ref="resumeRef" class="resume">
        <article
          v-for="(resume, index) in works"
          :key="index"
          class="work row"
        >
          <hr />
          <div>
            <h2>{{ resume.company }}</h2>
            <p>
              {{ resume.role }}
              <br />
              <small>{{ resume.startDate }} - {{ resume.endDate }}</small>
            </p>
          </div>
        </article>
      </nav>
    </div>
    <div
      class="blank"
      role="link"
      tabindex="0"
      @mouseover="$emit('change-mouse', '#c0cac4')"
      @focus="$emit('change-mouse', '#c0cac4')"
    ></div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue"
import { showOverlay, hideOverlay } from "~/composables/useAnimate"

const props = defineProps({
  openMenu: {
    type: Boolean,
    default: false,
  },
})

defineEmits(["change-mouse"])

const menuRef = ref(null)
const resumeRef = ref(null)

const config = useRuntimeConfig()

const works = ref([])
const profileImageUrl = ref("/images/AlukoBrown.png")

const fetchContentfulData = async () => {
  const spaceId = config.public.contentfulSpaceId
  const accessToken = config.public.contentfulAccessToken

  if (!spaceId || !accessToken) {
    return
  }

  try {
    const baseUrl = `https://cdn.contentful.com/spaces/${spaceId}`
    const headers = { Authorization: `Bearer ${accessToken}` }

    // Fetch resume entries
    const resumeData = await $fetch(
      `${baseUrl}/entries?content_type=resume&order=-sys.updatedAt`,
      { headers }
    )
    if (resumeData?.items) {
      works.value = resumeData.items.map((item) => ({
        company: item.fields.company,
        role: item.fields.role,
        startDate: item.fields.startDate,
        endDate: item.fields.endDate,
      }))
    }

    // Fetch profile image
    const profileData = await $fetch(
      `${baseUrl}/entries?content_type=profileImage`,
      { headers }
    )
    if (profileData?.items?.length && profileData.includes?.Asset?.length) {
      const assetId =
        profileData.items[0].fields.picture?.sys?.id
      if (assetId) {
        const asset = profileData.includes.Asset.find(
          (a) => a.sys.id === assetId
        )
        if (asset?.fields?.file?.url) {
          profileImageUrl.value = `https:${asset.fields.file.url}`
        }
      }
    }
  } catch (e) {
    console.warn("Contentful fetch failed:", e.message)
  }
}

onMounted(() => {
  fetchContentfulData()
})

watch(
  () => props.openMenu,
  (isOpen) => {
    if (menuRef.value && resumeRef.value) {
      if (isOpen) {
        showOverlay(menuRef.value, resumeRef.value.children)
      } else {
        hideOverlay(menuRef.value, resumeRef.value.children)
      }
    }
  }
)
</script>
