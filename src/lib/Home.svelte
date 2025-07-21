<script>
  import { Globe, ChevronRight } from 'lucide-svelte';

  let { 
    languages, 
    selectedLanguage, 
    isOnline, 
    theme, 
    themeStyles, 
    quickReferences, 
    emergencyKit,
    activeTab = $bindable()
  } = $props();
</script>

<div class="space-y-6">
  <div 
    class="rounded-xl p-4 text-white"
    style={theme === 'sepia' 
      ? 'background: linear-gradient(to right, #A67C00, #8B6914);' 
      : theme === 'dark' 
      ? 'background: linear-gradient(to right, #4A9B7A, #3A7F62);'
      : 'background: linear-gradient(to right, #059669, #047857);'}
  >
    <h2 class="text-xl font-bold mb-2">As-salamu alaykum!</h2>
    <div class="flex items-center space-x-4">
      <div class="flex items-center space-x-2">
        <Globe size={14} />
        <span class="text-xs">{languages.find(l => l.code === selectedLanguage)?.name}</span>
      </div>
      <div class="flex items-center space-x-2">
        <div class={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-400' : 'bg-orange-400'}`}></div>
        <span class="text-xs">{isOnline ? 'Online' : 'Offline'}</span>
      </div>
    </div>
  </div>

  <!-- Quick Actions -->
  <div class="space-y-4">
    <h2 class="text-lg font-bold" style="color: var(--text-primary);">Quick Actions</h2>
    <div class="grid grid-cols-2 gap-3">
      <button 
        class="p-3 rounded-lg text-white font-medium text-sm hover:opacity-80"
        style="background-color: var(--color-active);"
        onclick={() => activeTab = 'learn'}
      >
        Read Quran
      </button>
      <button 
        class="p-3 rounded-lg text-white font-medium text-sm hover:opacity-80"
        style="background-color: var(--color-active);"
        onclick={() => activeTab = 'dawah'}
      >
        Voice Search
      </button>
      <button 
        class="p-3 rounded-lg text-white font-medium text-sm hover:opacity-80"
        style="background-color: var(--color-active);"
        onclick={() => activeTab = 'location'}
      >
        Find Mosques
      </button>
      <button 
        class="p-3 rounded-lg text-white font-medium text-sm hover:opacity-80"
        style="background-color: var(--color-active);"
        onclick={() => {}}
      >
        Common Questions
      </button>
    </div>
  </div>

  <!-- Quick Tableegh -->
  <button 
    class="rounded-xl shadow-md p-4 border cursor-pointer hover:shadow-lg transition-all w-full text-left"
    style="background-color: var(--bg-secondary); border-color: var(--border-color);"
    onclick={() => {}}
  >
    <h3 class="font-semibold mb-3" style="color: var(--text-primary);">Quick Tableegh</h3>
    <div class="rounded-lg p-3" style="background-color: var(--bg-accent);">
      <h4 class="font-medium text-sm mb-2" style="color: var(--text-primary);">
        {emergencyKit.title}
      </h4>
      {#each emergencyKit.points as point}
        <div class="text-xs mb-1" style="color: var(--text-muted);">
          • {point}
        </div>
      {/each}
    </div>
    <div class="flex items-center justify-end mt-3">
      <ChevronRight style="color: var(--color-inactive);" size={20} />
    </div>
  </button>

  <!-- Quick References -->
  <div class="space-y-4">
    <h2 class="text-lg font-bold" style="color: var(--text-primary);">Quick References</h2>
    <div class="grid grid-cols-2 gap-2">
      {#each quickReferences as ref}
        <div 
          class="p-3 rounded-lg border cursor-pointer hover:opacity-80"
          style="background-color: var(--bg-secondary); border-color: var(--border-color);"
        >
          <div class="text-xs font-bold mb-1" style="color: var(--color-active);">{ref.title}</div>
          <div class="text-xs mb-1" style="color: var(--text-primary);">{ref.verse}</div>
          <div class="text-xs" style="color: var(--text-muted);">{ref.translation}</div>
        </div>
      {/each}
    </div>
  </div>
</div>