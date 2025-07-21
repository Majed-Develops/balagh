<script>
  import { ChevronRight, GraduationCap, Mic, Users } from 'lucide-svelte';

  let { theme } = $props();
</script>

<div class="space-y-6">
  <div 
    class="rounded-xl p-6 text-white"
    style={theme === 'sepia' 
      ? 'background: linear-gradient(to right, #A67C00, #8B6914);' 
      : theme === 'dark' 
      ? 'background: linear-gradient(to right, #4A9B7A, #3A7F62);'
      : 'background: linear-gradient(to right, #2563eb, #7c3aed);'}
  >
    <h2 class="text-xl font-bold mb-2">Knowledge Assessment</h2>
    <p class="opacity-90">Test your Islamic knowledge and Da'wah skills</p>
  </div>

  <div class="rounded-xl shadow-md p-4" style="background-color: var(--bg-secondary);">
    <h3 class="font-semibold mb-3" style="color: var(--text-primary);">Learning Progress</h3>
    <div class="p-3 rounded-lg mb-4" style="background-color: var(--bg-accent);">
      <p class="text-sm" style="color: var(--text-primary);">
        You last learned in: <span class="font-semibold">Tawheed - Chapter 3: Names and Attributes of Allah</span>
      </p>
      <p class="text-xs mt-1" style="color: var(--text-muted);">Progress: 67% complete</p>
    </div>
    <button 
      class="w-full text-white py-3 rounded-lg font-medium hover:opacity-80"
      style="background-color: var(--color-active);"
    >
      Continue Learning
    </button>
  </div>

  <div class="space-y-4">
    <button 
      onclick={() => {}}
      class="rounded-xl shadow-md p-4 border hover:shadow-lg transition-all cursor-pointer group w-full text-left"
      style="background-color: var(--bg-secondary); border-color: var(--border-color);"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div 
            class="p-3 rounded-lg group-hover:opacity-80 transition-colors"
            style="background-color: var(--bg-accent);"
          >
            <GraduationCap style="color: var(--color-active);" size={24} />
          </div>
          <div class="flex-1">
            <h3 class="font-semibold" style="color: var(--text-primary);">Knowledge Quiz</h3>
            <p class="text-sm" style="color: var(--text-muted);">Test your understanding of Islamic concepts</p>
          </div>
        </div>
        <ChevronRight style="color: var(--color-inactive);" size={20} />
      </div>
    </button>

    <button 
      onclick={() => {}}
      class="rounded-xl shadow-md p-4 border hover:shadow-lg transition-all cursor-pointer group w-full text-left"
      style="background-color: var(--bg-secondary); border-color: var(--border-color);"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div 
            class="p-3 rounded-lg group-hover:opacity-80 transition-colors"
            style="background-color: var(--bg-accent);"
          >
            <Mic style="color: var(--color-active);" size={24} />
          </div>
          <div class="flex-1">
            <h3 class="font-semibold" style="color: var(--text-primary);">Da'wah Skills Assessment</h3>
            <p class="text-sm" style="color: var(--text-muted);">Evaluate your communication abilities</p>
          </div>
        </div>
        <ChevronRight style="color: var(--color-inactive);" size={20} />
      </div>
    </button>

    <button 
      onclick={() => {}}
      class="rounded-xl shadow-md p-4 border hover:shadow-lg transition-all cursor-pointer group w-full text-left"
      style="background-color: var(--bg-secondary); border-color: var(--border-color);"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div 
            class="p-3 rounded-lg group-hover:opacity-80 transition-colors"
            style="background-color: var(--bg-accent);"
          >
            <Users style="color: var(--color-active);" size={24} />
          </div>
          <div class="flex-1">
            <h3 class="font-semibold" style="color: var(--text-primary);">Scenario-Based Tests</h3>
            <p class="text-sm" style="color: var(--text-muted);">Practice real-world Da'wah situations</p>
          </div>
        </div>
        <ChevronRight style="color: var(--color-inactive);" size={20} />
      </div>
    </button>
  </div>

  <div class="rounded-xl p-4" style="background-color: var(--bg-accent);">
    <h3 class="font-semibold mb-2" style="color: var(--text-primary);">Your Stats</h3>
    <div class="grid grid-cols-3 gap-4 text-center">
      <div>
        <div class="text-2xl font-bold" style="color: var(--color-active);">85%</div>
        <div class="text-xs" style="color: var(--color-active);">Overall Score</div>
      </div>
      <div>
        <div class="text-2xl font-bold" style="color: var(--color-active);">23</div>
        <div class="text-xs" style="color: var(--color-active);">Tests Completed</div>
      </div>
      <div>
        <div class="text-2xl font-bold" style="color: var(--color-active);">12</div>
        <div class="text-xs" style="color: var(--color-active);">Areas Mastered</div>
      </div>
    </div>
  </div>
</div>