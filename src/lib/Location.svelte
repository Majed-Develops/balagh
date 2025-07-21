<script>
  import { MapPin } from 'lucide-svelte';

  let { 
    locationInput = $bindable(),
    locationData,
    nearbyMosques
  } = $props();
</script>

<div class="space-y-6">
  <div class="rounded-xl shadow-md p-4" style="background-color: var(--bg-secondary);">
    <h3 class="font-semibold mb-3" style="color: var(--text-primary);">Location Analysis</h3>
    <div class="flex space-x-2 mb-4">
      <input
        type="text"
        placeholder="Enter location or use GPS..."
        bind:value={locationInput}
        class="flex-1 p-3 border rounded-lg focus:ring-2 focus:outline-none"
        style="background-color: var(--bg-secondary); border-color: var(--border-color); color: var(--text-primary);"
      />
      <button 
        class="text-white px-4 py-3 rounded-lg hover:opacity-80"
        style="background-color: var(--color-active);"
      >
        <MapPin size={16} />
      </button>
    </div>
  </div>

  <div class="rounded-xl shadow-md p-4" style="background-color: var(--bg-secondary);">
    <h3 class="font-semibold mb-3" style="color: var(--text-primary);">Cultural Context</h3>
    <div class="space-y-3">
      <div>
        <span class="text-sm font-medium" style="color: var(--text-primary);">Country:</span>
        <span class="text-sm ml-2" style="color: var(--text-muted);">{locationData.country}</span>
      </div>
      <div>
        <span class="text-sm font-medium" style="color: var(--text-primary);">Primary Language:</span>
        <span class="text-sm ml-2" style="color: var(--text-muted);">{locationData.language}</span>
      </div>
      <div>
        <span class="text-sm font-medium" style="color: var(--text-primary);">Culture:</span>
        <span class="text-sm ml-2" style="color: var(--text-muted);">{locationData.culture}</span>
      </div>
      <div>
        <span class="text-sm font-medium" style="color: var(--text-primary);">Religion:</span>
        <span class="text-sm ml-2" style="color: var(--text-muted);">{locationData.religion}</span>
      </div>
      <div>
        <span class="text-sm font-medium" style="color: var(--text-primary);">Common Misconceptions:</span>
        <span class="text-sm ml-2" style="color: var(--text-muted);">{locationData.misconceptions}</span>
      </div>
      <div>
        <span class="text-sm font-medium" style="color: var(--text-primary);">Recommended Approach:</span>
        <span class="text-sm ml-2" style="color: var(--text-muted);">{locationData.approach}</span>
      </div>
    </div>
  </div>

  <div class="rounded-xl shadow-md p-4" style="background-color: var(--bg-secondary);">
    <h3 class="font-semibold mb-3" style="color: var(--text-primary);">Nearby Islamic Centers</h3>
    <div class="space-y-3">
      {#each nearbyMosques as mosque}
        <div class="flex items-center justify-between p-3 rounded-lg" style="background-color: var(--bg-accent);">
          <div>
            <h4 class="font-medium text-sm" style="color: var(--text-primary);">{mosque.name}</h4>
            <p class="text-xs" style="color: var(--text-muted);">{mosque.address}</p>
          </div>
          <span class="text-xs font-medium" style="color: var(--color-active);">{mosque.distance}</span>
        </div>
      {/each}
    </div>
  </div>
</div>