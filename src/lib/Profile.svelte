<script>
  import { User } from 'lucide-svelte';

  let { 
    languages,
    selectedLanguage = $bindable(),
    isOnline = $bindable()
  } = $props();
</script>

<div class="space-y-6">
  <div class="rounded-xl shadow-md p-6" style="background-color: var(--bg-secondary);">
    <div class="flex items-center space-x-4 mb-4">
      <div 
        class="w-16 h-16 rounded-full flex items-center justify-center"
        style="background-color: var(--bg-accent);"
      >
        <User style="color: var(--color-active);" size={24} />
      </div>
      <div>
        <h2 class="text-xl font-bold" style="color: var(--text-primary);">Ayub Jibaly</h2>
        <p class="text-sm" style="color: var(--text-muted);">Da'i since 2019</p>
      </div>
    </div>
    
    <div class="grid grid-cols-2 gap-4 text-center">
      <div class="p-3 rounded-lg" style="background-color: var(--bg-accent);">
        <div class="text-lg font-bold" style="color: var(--color-active);">156</div>
        <div class="text-xs" style="color: var(--color-active);">People Reached</div>
      </div>
      <div class="p-3 rounded-lg" style="background-color: var(--bg-accent);">
        <div class="text-lg font-bold" style="color: var(--color-active);">43</div>
        <div class="text-xs" style="color: var(--color-active);">Conversations</div>
      </div>
    </div>
  </div>

  <div class="rounded-xl shadow-md p-4" style="background-color: var(--bg-secondary);">
    <h3 class="font-semibold mb-4" style="color: var(--text-primary);">App Settings</h3>
    <div class="space-y-4">
      <div>
        <label class="block text-sm font-medium mb-2" style="color: var(--text-primary);">Display Language</label>
        <select 
          bind:value={selectedLanguage}
          class="w-full p-3 border rounded-lg focus:ring-2 focus:outline-none"
          style="background-color: var(--bg-secondary); border-color: var(--border-color); color: var(--text-primary);"
        >
          {#each languages as lang}
            <option value={lang.code}>
              {lang.flag} {lang.name}
            </option>
          {/each}
        </select>
      </div>
      
      <div class="flex items-center justify-between py-3">
        <span class="text-sm font-medium" style="color: var(--text-primary);">Auto Sync</span>
        <button 
          onclick={() => isOnline = !isOnline}
          class="px-4 py-2 rounded-lg text-xs font-medium transition-colors"
          style={isOnline 
            ? 'background-color: var(--bg-accent);' 
            : 'background-color: var(--bg-accent); opacity: 0.6;'}
        >
          {isOnline ? 'Enabled' : 'Disabled'}
        </button>
      </div>
      
      <div class="flex items-center justify-between py-3">
        <span class="text-sm font-medium" style="color: var(--text-primary);">Offline Content</span>
        <button 
          class="text-white px-4 py-2 rounded-lg text-xs font-medium hover:opacity-80"
          style="background-color: var(--color-active);"
        >
          Sync Now
        </button>
      </div>
    </div>
  </div>

  <div class="rounded-xl shadow-md p-4" style="background-color: var(--bg-secondary);">
    <h3 class="font-semibold mb-3" style="color: var(--text-primary);">Storage & Data</h3>
    <div class="space-y-3">
      <div class="flex justify-between text-sm" style="color: var(--text-muted);">
        <span>Quran Audio</span>
        <span>245 MB</span>
      </div>
      <div class="flex justify-between text-sm" style="color: var(--text-muted);">
        <span>Hadith Database</span>
        <span>156 MB</span>
      </div>
      <div class="flex justify-between text-sm" style="color: var(--text-muted);">
        <span>Educational Videos</span>
        <span>1.2 GB</span>
      </div>
      <div class="pt-2 border-t" style="border-color: var(--border-color);">
        <div class="flex justify-between text-sm font-medium" style="color: var(--text-primary);">
          <span>Total Used</span>
          <span>1.6 GB / 4 GB</span>
        </div>
        <div 
          class="w-full rounded-full h-2 mt-2"
          style="background-color: var(--border-color);"
        >
          <div 
            class="h-2 rounded-full" 
            style="width: 40%; background-color: var(--color-active);"
          ></div>
        </div>
      </div>
    </div>
  </div>
</div>