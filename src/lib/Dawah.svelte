<script>
  import { Globe, Wifi, WifiOff, Mic, Image } from 'lucide-svelte';

  let { 
    languages, 
    selectedLanguage = $bindable(), 
    audienceLanguage = $bindable(),
    isOnline = $bindable(), 
    theme, 
    quickSearchQuery = $bindable(),
    isRecording = $bindable(),
    smartSuggestions,
    quickSearchResults,
    misconceptionResponses,
    getSearchResponseKey
  } = $props();
</script>

<div class="space-y-6">
  <div 
    class="rounded-xl p-6 text-white"
    style={theme === 'sepia' 
      ? 'background: linear-gradient(to right, #A67C00, #8B6914);' 
      : theme === 'dark' 
      ? 'background: linear-gradient(to right, #4A9B7A, #3A7F62);'
      : 'background: linear-gradient(to right, #059669, #047857);'}
  >
    <h2 class="text-2xl font-bold mb-2">As-salamu alaykum!</h2>
    <p class="opacity-90">Ready to share the message of Islam today?</p>
    <div class="flex items-center mt-4 space-x-4">
      <div class="flex items-center space-x-2">
        <Globe size={16} />
        <span class="text-sm">{languages.find(l => l.code === selectedLanguage)?.name}</span>
      </div>
      <div class="flex items-center space-x-2">
        <div class={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-400' : 'bg-orange-400'}`}></div>
        <span class="text-sm">{isOnline ? 'Online' : 'Offline'}</span>
      </div>
    </div>
  </div>

  <div class="rounded-xl shadow-md p-4 border" style="background-color: var(--bg-secondary); border-color: var(--border-color);">
    <div class="flex items-center justify-between mb-3">
      <h3 class="font-semibold" style="color: var(--text-primary);">Quick Da'wah Assistant</h3>
      <div class="flex items-center space-x-2">
        <button 
          onclick={() => isOnline = !isOnline}
          class="p-1 rounded-lg hover:opacity-70"
        >
          {#if isOnline}
            <Wifi style="color: var(--color-active);" size={16} />
          {:else}
            <WifiOff class="text-orange-600" size={16} />
          {/if}
        </button>
      </div>
    </div>
    
    <div class="flex space-x-2 mb-3">
      <select 
        bind:value={selectedLanguage}
        class="flex-1 p-2 text-xs border rounded-lg focus:ring-2 focus:outline-none"
        style="background-color: var(--bg-secondary); border-color: var(--border-color); color: var(--text-primary);"
      >
        {#each languages as lang}
          <option value={lang.code}>Da'i: {lang.name}</option>
        {/each}
      </select>
      <select 
        bind:value={audienceLanguage}
        class="flex-1 p-2 text-xs border rounded-lg focus:ring-2 focus:outline-none"
        style="background-color: var(--bg-secondary); border-color: var(--border-color); color: var(--text-primary);"
      >
        {#each languages as lang}
          <option value={lang.code}>Audience: {lang.name}</option>
        {/each}
      </select>
    </div>

    <div class="relative mb-3">
      <textarea
        placeholder="Type, speak, or scan text for translation..."
        bind:value={quickSearchQuery}
        class="w-full h-24 p-3 pr-20 border rounded-lg focus:ring-2 focus:outline-none resize-none text-sm"
        style="background-color: var(--bg-secondary); border-color: var(--border-color); color: var(--text-primary);"
      ></textarea>
      <div class="absolute bottom-3 right-3 flex space-x-1">
        <button 
          onclick={() => isRecording = !isRecording}
          class="p-2 rounded-lg transition-colors"
          style={isRecording 
            ? 'background-color: #fee2e2; color: #dc2626;'
            : 'background-color: var(--bg-accent);'}
        >
          <Mic size={14} />
        </button>
        <button 
          class="p-2 rounded-lg transition-colors"
          style="background-color: var(--bg-accent);"
          title="Camera Translation"
        >
          <Image size={14} />
        </button>
      </div>
    </div>

    {#if !quickSearchQuery}
      <div class="space-y-3">
        <h4 class="text-sm font-medium" style="color: var(--text-primary);">Common Questions:</h4>
        {#each smartSuggestions as suggestion}
          <button
            onclick={() => quickSearchQuery = suggestion}
            class="w-full text-left p-2 rounded-lg hover:opacity-80 text-sm"
            style="background-color: var(--bg-accent);"
          >
            <span style="color: var(--text-primary);">{suggestion}</span>
          </button>
        {/each}
      </div>
    {/if}

    {#if quickSearchQuery}
      <div class="max-h-40 overflow-y-auto space-y-3">
        {#each quickSearchResults as result}
          <div class="border rounded-lg overflow-hidden" style="background-color: var(--bg-secondary); border-color: var(--border-color);">
            <!-- Header with source label -->
            <div 
              class="px-3 py-2 text-xs font-bold text-white"
              style={result.type === 'quran' ? 'background-color: #059669;' : 'background-color: #2563eb;'}
            >
              {result.source}
            </div>
            
            <!-- Content -->
            <div class="p-3">
              <div class="flex items-center justify-between mb-2">
                <h4 class="font-medium text-sm" style="color: var(--text-primary);">
                  {result.title}
                </h4>
                <span class="text-xs" style="color: var(--text-muted);">
                  {result.relevance}% match
                </span>
              </div>
              <p class="text-xs mb-2" style="color: var(--text-muted);">
                {result.content}
              </p>
              {#if result.translation}
                <p class="text-xs font-arabic" style="color: var(--color-active);">
                  {result.translation}
                </p>
              {/if}
            </div>
          </div>
        {/each}
        
        <!-- Show misconception response if relevant -->
        {#if getSearchResponseKey()}
          {@const key = getSearchResponseKey()}
          {@const response = misconceptionResponses[key]}
          <div class="border rounded-lg p-3" style="background-color: var(--bg-secondary); border-color: var(--border-color);">
            <div class="mb-2">
              <span class="px-2 py-1 rounded text-xs font-bold text-white bg-red-600">
                MISCONCEPTION
              </span>
            </div>
            <div>
              <h4 class="font-bold text-sm mb-2" style="color: var(--text-primary);">
                {response.title}
              </h4>
              {#each response.points as point}
                <div class="text-xs mb-1" style="color: var(--text-muted);">
                  • {point}
                </div>
              {/each}
              <div class="text-xs mt-2 font-medium" style="color: var(--color-active);">
                {response.verse}
              </div>
            </div>
          </div>
        {/if}
      </div>
    {/if}
  </div>
</div>