<script>
  import { Search, ChevronRight } from 'lucide-svelte';

  let { 
    learnSearchQuery = $bindable(),
    learningSections,
    apologeticsTools,
    theme
  } = $props();
</script>

<div class="space-y-6">
  <div class="rounded-xl shadow-md p-4" style="background-color: var(--bg-secondary);">
    <div class="relative">
      <Search class="absolute left-3 top-3" style="color: var(--color-inactive);" size={20} />
      <input
        type="text"
        placeholder="Search Islamic knowledge..."
        bind:value={learnSearchQuery}
        class="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:outline-none"
        style="background-color: var(--bg-secondary); border-color: var(--border-color); color: var(--text-primary);"
      />
    </div>
  </div>

  <div class="space-y-4">
    <h2 class="text-xl font-bold" style="color: var(--text-primary);">Islamic Knowledge</h2>
    {#each learningSections as section}
      <div 
        onclick={() => {}}
        class="rounded-xl shadow-md p-4 border hover:shadow-lg transition-all cursor-pointer group"
        style="background-color: var(--bg-secondary); border-color: var(--border-color);"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div 
              class="p-3 rounded-lg group-hover:opacity-80 transition-colors"
              style="background-color: var(--bg-accent);"
            >
              <svelte:component this={section.icon} style="color: var(--color-active);" size={24} />
            </div>
            <div class="flex-1">
              <h3 class="font-semibold" style="color: var(--text-primary);">{section.title}</h3>
              <p class="text-sm" style="color: var(--text-muted);">{section.subtitle}</p>
              {#if section.features}
                <div class="flex flex-wrap gap-1 mt-1">
                  {#each section.features as feature}
                    <span 
                      class="text-xs px-2 py-1 rounded-full"
                      style="background-color: var(--color-active); color: {theme === 'dark' ? '#1e1e1e' : '#ffffff'};"
                    >
                      {feature}
                    </span>
                  {/each}
                </div>
              {/if}
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <ChevronRight style="color: var(--color-inactive);" size={20} />
          </div>
        </div>
      </div>
    {/each}
  </div>

  <!-- Quick Access to Apologetics Tools -->
  <div class="space-y-4">
    <h2 class="text-lg font-bold" style="color: var(--text-primary);">Debate & Apologetics</h2>
    <div class="grid grid-cols-2 gap-3">
      {#each apologeticsTools as tool}
        <div 
          class="p-3 rounded-lg border cursor-pointer hover:opacity-80"
          style="background-color: var(--bg-secondary); border-color: var(--border-color);"
          onclick={() => {}}
        >
          <div class="flex items-center space-x-2 mb-2">
            <svelte:component this={tool.icon} style="color: var(--color-active);" size={20} />
            <div class="text-xs font-bold" style="color: var(--text-primary);">
              {tool.title}
            </div>
          </div>
          <div class="text-xs" style="color: var(--text-muted);">
            {tool.subtitle}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>