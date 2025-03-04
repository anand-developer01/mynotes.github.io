const isHighlighted = 'vue3-projects'
const Links1 = 'vue-notes'
const Links2 = 'vue3'
const Links3 = 'vue-x'
const Links4 = 'vue3-projects'

const vue3Projects = {
  vue3Projects: [
    {
      id: 1,
      title: "Pagination",
      note: [
        {
          text1: `That’s awesome! 🎯 Vue 3 + Vuex + TypeScript is a powerful stack, and senior-level roles require strong expertise in:
✅ Vue 3 Composition API & Options API
✅ Vuex (State Management) & Pinia (Vuex Alternative)
✅ TypeScript for Vue (Types, Interfaces, Generics)
✅ Vue Router & Navigation Guards
✅ Performance Optimization (Lazy Loading, Code Splitting)
✅ Testing (Jest, Cypress, Vue Test Utils)
✅ Component Architecture & Design Patterns
✅ REST APIs, GraphQL, and WebSockets
✅ Unit Testing & E2E Testing

🚀 1️⃣ Key Topics for Senior Vue 3 Developer Interviews
Here are common interview topics that you must be 100% confident in:

🔹 Vue 3 & TypeScript Best Practices
How to strongly type Vue components with TypeScript?
How to use Vue's defineProps and defineEmits with TypeScript?
What are Vue 3 Composition API advantages over Options API?
🔹 Vuex & State Management
Explain Vuex modules and namespaced state.
How to use Vuex with TypeScript (Store Typing, Actions, Mutations, Getters)?
What are Vuex alternatives (like Pinia), and when should you use them?
🔹 Vue Router (Authentication, Navigation Guards)
How do you protect routes using Vue Router & Vuex?
What is Lazy Loading in Vue Router, and how do you implement it?
🔹 Performance Optimization
How do you improve Vue app performance? (Lazy Loading, Virtual Scrolling, Debouncing, etc.)
What are Suspense & async components in Vue 3?
How do you use Web Workers in Vue for heavy computations?
🔹 Advanced TypeScript in Vue
How do you define types for Vuex state, mutations, actions, and getters?
Explain Generics in TypeScript and how they help in Vue projects.
How to use TypeScript with Vuex modules & Vue Router?
🔹 Testing Vue Apps
How do you write unit tests with Jest & Vue Test Utils?
How do you perform end-to-end (E2E) testing using Cypress?
What are mocking strategies for Vue components, Vuex, and API calls?
📌 2️⃣ Example Vue 3 + TypeScript Senior-Level Questions
Here are some real-world Vue 3 + Vuex + TypeScript interview questions:

🔹 Q1: How do you use Vue 3’s defineProps with TypeScript?
✅ Answer:

vue
Copy
<script setup lang="ts">
interface User {
  id: number;
  name: string;
  email: string;
}

defineProps<{ user: User }>(); // ✅ Define props with TypeScript
</script>

<template>
  <div>
    <p>ID: {{ user.id }}</p>
    <p>Name: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>
  </div>
</template>
🔹 Q2: How do you type Vuex Store (State, Mutations, Actions) in TypeScript?
✅ Answer:

ts
Copy
// Vuex Store with TypeScript
import { createStore, Store } from 'vuex';

interface State {
  count: number;
}

export const store = createStore<State>({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    asyncIncrement({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
});

// ✅ Type-Safe Vuex Store Access
export function useStore(): Store<State> {
  return store;
}
🔹 Q3: How do you use Vue Router with Navigation Guards & Vuex?
✅ Answer:

ts
Copy
// router/index.ts (Vue Router with Auth Guards in TypeScript)
import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';
import LoginPage from '@/views/LoginPage.vue';
import Dashboard from '@/views/Dashboard.vue';

const routes = [
  { path: '/login', component: LoginPage },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// ✅ Navigation Guard with Vuex & TypeScript
router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters['auth/isAuthenticated'];

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login'); // Redirect if not authenticated
  } else {
    next();
  }
});

export default router;
📌 3️⃣ Your Next Steps to Prepare for a Senior Vue 3 Developer Job
✔ Deep dive into Vue 3 Composition API (reactive, ref, computed, watch, watchEffect).
✔ Master Vuex & Pinia for complex state management.
✔ Practice using TypeScript with Vue, Vuex, and Vue Router.
✔ Optimize Vue apps (Lazy Loading, Suspense, Virtual Scrolling, Web Workers).
✔ Write tests with Jest & Vue Test Utils for real-world projects.
✔ Build real-world projects (Authentication, Role-Based Dashboard, Data-Heavy Apps).
✔ Contribute to Vue 3 open-source projects on GitHub.

🚀 4️⃣ Where to Find Senior Vue 3 Developer Jobs
💼 Job Boards:

LinkedIn Jobs
WeWorkRemotely
Stack Overflow Jobs
Toptal (For freelance senior developers)
👨‍💻 Vue 3 & TypeScript Projects for Your Portfolio:

Build a Vue 3 + TypeScript Dashboard (with Vuex & API authentication).
Create an E-commerce App with Vue 3 + Pinia + TypeScript.
Develop a Real-time Chat App using Vue 3 + WebSockets.
Contribute to Vue 3 Open Source Projects on GitHub.
🔥 Final Advice
🚀 You are already on the right track!

Master Vue 3 + TypeScript + Vuex (or Pinia).
Practice real-world problems and architecture patterns.
Build advanced projects & showcase them on GitHub.
Apply to senior Vue 3 jobs and ace technical interviews!
If you need mock interview questions, code challenges, or career advice, feel free to ask! 🔥🚀🎯`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "Pagination",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "Pagination",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "Pagination",
      note: [
        {
          text1: ``,
          code1: `//---- AppPagination.vue--------
         // &lt;!-- AppPagination.vue --&gt;
&lt;template&gt;
    &lt;div&gt;
      &lt;!-- Table displaying posts --&gt;
      &lt;table&gt;
        &lt;thead&gt;
          &lt;tr&gt;
            &lt;th&gt;ID&lt;/th&gt;
            &lt;th&gt;Title&lt;/th&gt;
            &lt;th&gt;Body&lt;/th&gt;
            &lt;th&gt;User ID&lt;/th&gt;
          &lt;/tr&gt;
        &lt;/thead&gt;
        &lt;tbody&gt;
          &lt;!-- Loop through each post and display its data --&gt;
          &lt;tr v-for=&quot;post in posts&quot; :key=&quot;post.id&quot;&gt;
            &lt;td&gt;{{ post.id }}&lt;/td&gt;
            &lt;td&gt;{{ post.title }}&lt;/td&gt;
            &lt;td&gt;
              &lt;!-- Show truncated body if &#39;showFullText&#39; is false --&gt;
              &lt;span v-if=&quot;!post.showFullText&quot;&gt;{{ sliceText(post.body, 10) }}&lt;/span&gt;
              &lt;!-- Show full body if &#39;showFullText&#39; is true --&gt;
              &lt;span v-else&gt;{{ post.body }}&lt;/span&gt;
              &lt;!-- Toggle between &#39;Show More&#39; and &#39;Show Less&#39; --&gt;
              &lt;a @click=&quot;toggleText(post)&quot; style=&quot;color:#096aca&quot;&gt;
                {{ post.showFullText ? &#39;...Show Less&#39; : &#39;...Show More&#39; }}
              &lt;/a&gt;
            &lt;/td&gt;
            &lt;td&gt;{{ post.userId }}&lt;/td&gt;
          &lt;/tr&gt;
        &lt;/tbody&gt;
      &lt;/table&gt;
  
      &lt;!-- Pagination component for handling page navigation --&gt;
      &lt;Pagination :currentPage=&quot;currentPage&quot; :totalCount=&quot;totalCount&quot; :pageSize=&quot;postsPerPage&quot; :siblingCount=&quot;1&quot;
                  @page-change=&quot;handlePageChange&quot; /&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  
  &lt;script lang=&quot;ts&quot;&gt;
  import { ref, onMounted } from &#39;vue&#39;;
  import axios from &#39;axios&#39;;
  import Pagination from &#39;./Pagination.vue&#39;;
  import { Post } from &#39;../types/PostTypes&#39;;  // Import the Post type definition
  
  export default {
    name: "AppPagination",
    components: {
      Pagination,  // Import the Pagination component
    },
    setup() {
      const postsPerPage = 10;  // Number of posts per page
      const posts = ref&lt; Post[] &gt;([]); // Ref to store posts
      const currentPage = ref(1);  // Ref to store current page number
      const totalCount = ref(0);  // Ref to store total number of posts
      const loading = ref(false);  // Ref to track the loading state
  
      // Function to slice text for preview purposes (showing first 10 characters)
      const sliceText = (body: string, length: number) =&gt; {
        return body.length &gt; length ? body.slice(0, length) + &#39;&#39; : body;
      };
  
      // Toggle the display of full text for the post
      const toggleText = (post: Post) =&gt; {
        post.showFullText = !post.showFullText;
      };
  
      // Fetch posts from the API, based on the current page
      const fetchPosts = async (page: number) =&gt; {
        loading.value = true;
        try {
          const response = await axios.get(
            \`https://jsonplaceholder.typicode.com/posts?_page=\${page}&amp;_limit=\${postsPerPage}\`
          );
          posts.value = response.data.map((post: Post) =&gt; ({
            ...post,
            showFullText: false  // Initialize the &#39;showFullText&#39; property for each post
          }));
          const total = parseInt(response.headers[&#39;x-total-count&#39;], 10);  // Get the total count of posts
          totalCount.value = total;  // Store the total post count
        } catch (error) {
          console.error(&#39;Error fetching posts:&#39;, error);
        } finally {
          loading.value = false;
        }
      };
  
      // Fetch posts when the component is mounted
      onMounted(() =&gt; {
        fetchPosts(currentPage.value);
      });
  
      // Handle page changes and fetch posts accordingly
      const handlePageChange = (page: number) =&gt; {
        currentPage.value = page;
        fetchPosts(page);
      };
  
      return {
        posts,
        totalCount,
        currentPage,
        postsPerPage,
        loading,
        sliceText,
        toggleText,
        handlePageChange,
      };
    },
  };
  &lt;/script&gt;

  //---------- Pagination.vue --------
  &lt;!-- Pagination.vue --&gt;
&lt;template&gt;
    &lt;div v-if=&quot;paginationRange.length &gt; 0&quot; class=&quot;pagination-container&quot;&gt;
      &lt;ul class=&quot;pagination&quot;&gt;
        &lt;!-- Previous page button --&gt;
        &lt;li :class=&quot;[&#39;pagination-item&#39;, { disabled: currentPage === 1 }]&quot; @click=&quot;onPrevious&quot;&gt;
          Prev
        &lt;/li&gt;
  
        &lt;!-- Loop through pagination range and display each page number --&gt;
        &lt;li v-for=&quot;pageNumber in paginationRange&quot; :key=&quot;pageNumber&quot;
            :class=&quot;[&#39;pagination-item&#39;, { selected: pageNumber === currentPage }]&quot; @click=&quot;onPageClick(pageNumber)&quot;&gt;
          {{ pageNumber }}
        &lt;/li&gt;
  
        &lt;!-- Next page button --&gt;
        &lt;li :class=&quot;[&#39;pagination-item&#39;, { disabled: currentPage === lastPage }]&quot; @click=&quot;onNext&quot;&gt;
          Next
        &lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
    &lt;div v-else&gt;
      &lt;p&gt;Loading...&lt;/p&gt; &lt;!-- Optionally show a loading state --&gt;
    &lt;/div&gt;
  &lt;/template&gt;

&lt;script lang=&quot;ts&quot;&gt;
import { defineComponent, computed, watch, ref, onMounted } from &#39;vue&#39;;
import { usePagination, DOTS } from &#39;@/components/pagination/usePagination&#39;;

interface PaginationProps {
    currentPage: number;
    totalCount: number;
    pageSize: number;
    siblingCount?: number;
    onPageChange: (page: number) =&gt; void;
}

export default defineComponent({
    name: &#39;Pagination&#39;,
    props: {
        currentPage: {
            type: Number,
            required: true,
        },
        totalCount: {
            type: Number,
            required: true,
        },
        pageSize: {
            type: Number,
            required: true,
        },
        siblingCount: {
            type: Number,
            default: 1,
        },
        onPageChange: {
            type: Function as unknown as () =&gt; (page: number) =&gt; void,
            required: true,
        },
    },
    setup(props: PaginationProps) {
        const paginationRange = ref&lt;(string | number)[]&gt;([]);
        const lastPage = ref&lt;number&gt;(1);

        // Watch the totalCount and currentPage to update paginationRange
        watch(
            [() =&gt; props.totalCount, () =&gt; props.currentPage],
            () =&gt; {
                if (props.totalCount &gt; 0 &amp;&amp; props.currentPage &gt; 0) {
                    const range = usePagination({
                        totalCount: props.totalCount,
                        pageSize: props.pageSize,
                        siblingCount: props.siblingCount,
                        currentPage: props.currentPage,
                    });
                    paginationRange.value = range;
                    lastPage.value = range[range.length - 1] as number; // Last page
                }
            },
            { immediate: true } // Ensures it runs on initial render
        );

        const onPageClick = (pageNumber: string | number) =&gt; {
            const page = Number(pageNumber);
            if (page !== props.currentPage) {
                props.onPageChange(page);
            }
        };

        const onPrevious = () =&gt; {
            if (props.currentPage &gt; 1) {
                props.onPageChange(props.currentPage - 1);
            }
        };

        const onNext = () =&gt; {
            if (props.currentPage &lt; lastPage.value) {
                props.onPageChange(props.currentPage + 1);
            }
        };

        return {
            paginationRange,
            onPageClick,
            onPrevious,
            onNext,
            lastPage,
        };
    },
});
&lt;/script&gt;

&lt;style scoped&gt;
/* pagination.css */
.pagination-container {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 20px 0;
}

.pagination-item {
    padding: 10px 15px;
    cursor: pointer;
    border: 1px solid #ddd;
    margin: 0 5px;
    transition: background-color 0.3s ease;
}

.pagination-item.selected {
    background-color: #007bff;
    color: white;
}

.pagination-item.disabled {
    cursor: not-allowed;
    opacity: 0.5;
}

.pagination-item.dots {
    cursor: default;
}

.arrow {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
}

.arrow.left {
    border-bottom: 5px solid #000;
}

.arrow.right {
    border-top: 5px solid #000;
}
&lt;/style&gt;

//---------- usePagination.ts --------
// usePagination.ts
export const DOTS = "...";

const range = (start: number, end: number) =&gt; {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) =&gt; idx + start);
};

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage
}: {
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  currentPage: number;
}) =&gt; {
  const totalPageCount = Math.ceil(totalCount / pageSize);
  const totalPageNumbers = siblingCount + 5;

  if (totalPageNumbers &gt;= totalPageCount) {
    return range(1, totalPageCount);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

  const shouldShowLeftDots = leftSiblingIndex &gt; 2;
  const shouldShowRightDots = rightSiblingIndex &lt; totalPageCount - 2;

  const firstPageIndex = 1;
  const lastPageIndex = totalPageCount;

  if (!shouldShowLeftDots &amp;&amp; shouldShowRightDots) {
    let leftItemCount = 3 + 2 * siblingCount;
    let leftRange = range(1, leftItemCount);
    return [...leftRange, DOTS, totalPageCount];
  }

  if (shouldShowLeftDots &amp;&amp; !shouldShowRightDots) {
    let rightItemCount = 3 + 2 * siblingCount;
    let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
    return [firstPageIndex, DOTS, ...rightRange];
  }

  if (shouldShowLeftDots &amp;&amp; shouldShowRightDots) {
    let middleRange = range(leftSiblingIndex, rightSiblingIndex);
    return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
  }

  return [];
};



//---------- PostTypes.ts --------
// PostTypes.ts
export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
    showFullText?: boolean; // Add this line to allow for the 'showFullText' property
}
   `
        }
      ]
    },
  ]
}




