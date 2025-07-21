<script>
  import { onMount } from 'svelte';
  import { 
    Search, MapPin, BookOpen, Mic, User, Users, Settings, Globe, 
    Play, FileText, Video, Image, ChevronRight, Plus, Tag, Calendar, 
    Map, Languages, Wifi, WifiOff, GraduationCap 
  } from 'lucide-svelte';
  import { Home, Dawah, Learn, Location, Test, Profile } from '$lib';

  // State variables using Svelte 5 runes
  let activeTab = $state('home');
  let selectedLanguage = $state('en');
  let audienceLanguage = $state('ar');
  let quickSearchQuery = $state('');
  let learnSearchQuery = $state('');
  let locationInput = $state('');
  let isOnline = $state(true);
  let isRecording = $state(false);
  let theme = $state('light');
  let showThemeSelector = $state(false);
  let unreadMessages = $state(2);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'ur', name: 'اردو', flag: '🇵🇰' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' }
  ];

  const learningSections = [
    { title: 'Al-Quran Al-Kareem', subtitle: 'Complete Quran with audio, translations & pronunciation', icon: BookOpen, color: 'green', features: ['Audio Recitation', 'Pronunciation Guide', 'Offline Download'] },
    { title: 'Sahih Bukhari & Muslim', subtitle: 'Authentic Hadith with translations & audio', icon: FileText, color: 'blue', features: ['Multi-language', 'Audio Playback', 'Offline Access'] },
    { title: 'Tirmidhi & Abu Dawud', subtitle: 'Additional authentic Hadith collections', icon: FileText, color: 'blue', features: ['Multi-language', 'Audio Playback', 'Offline Access'] },
    { title: 'Da\'wah Communication Skills', subtitle: 'Learn effective Islamic communication techniques', icon: Mic, color: 'orange', features: ['Conversation Tips', 'Body Language', 'Active Listening'] },
    { title: 'Aqidah (Islamic Belief)', subtitle: 'Fundamental beliefs with translations', icon: Tag, color: 'purple', features: ['Multi-language', 'Audio Support'] },
    { title: 'Tawheed', subtitle: 'Oneness of Allah with audio guides', icon: Plus, color: 'green', features: ['Multi-language', 'Audio Support'] },
    { title: 'Prophet Muhammad (ﷺ)', subtitle: 'Life and teachings with multimedia', icon: User, color: 'orange', features: ['Multi-language', 'Audio Support'] },
    { title: 'Prophets & Messengers', subtitle: 'Stories with translations & audio', icon: Users, color: 'indigo', features: ['Multi-language', 'Audio Support'] },
    { title: 'Akhirah (Hereafter)', subtitle: 'Afterlife concepts with translations', icon: Globe, color: 'red', features: ['Multi-language', 'Audio Support'] },
    { title: 'Day of Judgement', subtitle: 'Qiyamah details with audio guides', icon: Calendar, color: 'yellow', features: ['Multi-language', 'Audio Support'] },
    { title: 'Islamic Ethics & Manners', subtitle: 'Akhlaq with practical translations', icon: BookOpen, color: 'teal', features: ['Multi-language', 'Audio Support'] },
    { title: 'Divine Books', subtitle: 'Scriptures comparison with audio', icon: FileText, color: 'pink', features: ['Multi-language', 'Audio Support'] },
    { title: 'Common Misconceptions', subtitle: 'Clarifications with translations', icon: Search, color: 'gray', features: ['Multi-language', 'Audio Support'] },
    { title: 'Quran & Science', subtitle: 'Scientific miracles with audio', icon: Globe, color: 'cyan', features: ['Multi-language', 'Audio Support'] }
  ];

  const apologeticsTools = [
    { title: 'Common Objections', subtitle: 'Prepared responses to frequent criticisms', icon: Search, color: 'red' },
    { title: 'Comparative Religion', subtitle: 'Christianity, Judaism & other faiths', icon: Globe, color: 'purple' },
    { title: 'Scientific Evidence', subtitle: 'Facts aligning with Islamic teachings', icon: Plus, color: 'blue' },
    { title: 'Historical Proofs', subtitle: 'Evidence for Prophet & Quran authenticity', icon: Calendar, color: 'orange' }
  ];

  const quickReferences = [
    { title: 'Shahada', verse: 'لا إله إلا الله محمد رسول الله', translation: 'There is no god but Allah, Muhammad is His messenger' },
    { title: 'Jesus in Quran', verse: 'Quran 19:30-31', translation: 'Jesus said: I am a servant of Allah...' },
    { title: 'Peace', verse: 'Quran 5:32', translation: 'Whoever saves a life, it is as if he saved all mankind' },
    { title: 'Tolerance', verse: 'Quran 2:256', translation: 'There is no compulsion in religion' }
  ];

  const smartSuggestions = [
    'What does Islam say about Jesus?',
    'Women rights in Islam',
    'Does Islam promote violence?',
    'What is the meaning of Jihad?'
  ];

  const emergencyKit = {
    title: '5-Minute Islam Overview',
    points: [
      'Islam means peace and submission to Allah',
      'Muslims believe in one God (Allah) and Prophet Muhammad',
      'Five Pillars: Shahada, Prayer, Charity, Fasting, Hajj',
      'Quran is the final revelation from God',
      'Day of Judgment and afterlife belief'
    ]
  };

  const misconceptionResponses = {
    'women': {
      title: "Women's Rights in Islam",
      points: ['Islam gave women rights 1400 years ago', 'Right to education, property, work', 'Hijab is for protection and dignity'],
      verse: 'Quran 4:1 - "Honor women, they are your mothers, daughters, sisters"'
    },
    'terrorism': {
      title: 'Islam and Violence',
      points: ['Islam means peace and submission', 'Killing innocents is forbidden', 'Jihad means struggle, not war'],
      verse: 'Quran 5:32 - "Killing one person is like killing all humanity"'
    },
    'sharia': {
      title: 'Sharia Law',
      points: ['Sharia means "path to water" - guidance', 'Focuses on justice and mercy', 'Protects life, family, property'],
      verse: 'Quran 16:90 - "Allah commands justice and good conduct"'
    }
  };

  const quickSearchResults = [
    {
      type: 'quran',
      source: 'QURAN',
      title: 'Quran 2:255 (Ayat al-Kursi)',
      content: 'Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence...',
      relevance: 95,
      translation: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ'
    },
    {
      type: 'hadith',
      source: 'Sahih Bukhari',
      title: 'Bukhari 2736',
      content: 'The Prophet (ﷺ) said: "Islam is built on five pillars..."',
      relevance: 90,
      translation: 'قال رسول الله صلى الله عليه وسلم: بني الإسلام على خمس'
    },
    {
      type: 'hadith',
      source: 'Sahih Muslim',
      title: 'Muslim 1631',
      content: 'The Prophet (ﷺ) said: "The believer is not one who eats his fill while his neighbor goes hungry..."',
      relevance: 88,
      translation: 'ليس المؤمن الذي يشبع وجاره جائع'
    }
  ];

  const locationData = {
    country: 'United States',
    language: 'English',
    culture: 'Western, Individualistic',
    religion: 'Christianity (65%), Non-religious (23%)',
    misconceptions: 'Women\'s rights, Terrorism, Sharia Law',
    approach: 'Focus on Jesus (AS) in Islam, Common values'
  };

  const nearbyMosques = [
    { name: 'Islamic Center of Greater Cincinnati', distance: '2.3 km', address: '3990 Executive Dr' },
    { name: 'Clifton Mosque', distance: '4.1 km', address: '2651 Clifton Ave' },
    { name: 'West Chester Islamic Center', distance: '12.8 km', address: '9350 Cincinnati Columbus Rd' }
  ];

  // Apply theme styles
  $effect(() => {
    const root = document.documentElement;
    
    if (theme === 'sepia') {
      root.style.setProperty('--bg-primary', '#F7F3E9');
      root.style.setProperty('--bg-secondary', '#F0E9D2');
      root.style.setProperty('--bg-accent', '#E8DFC7');
      root.style.setProperty('--text-primary', '#5C4A2F');
      root.style.setProperty('--text-secondary', '#6B5B40');
      root.style.setProperty('--text-muted', '#8B7B6B');
      root.style.setProperty('--color-active', '#8B6914');
      root.style.setProperty('--color-inactive', '#A0926B');
      root.style.setProperty('--border-color', '#D4C4A8');
    } else if (theme === 'dark') {
      root.style.setProperty('--bg-primary', '#1A1A1A');
      root.style.setProperty('--bg-secondary', '#2D2D2D');
      root.style.setProperty('--bg-accent', '#3A3A3A');
      root.style.setProperty('--text-primary', '#E8E8E8');
      root.style.setProperty('--text-secondary', '#D0D0D0');
      root.style.setProperty('--text-muted', '#B0B0B0');
      root.style.setProperty('--color-active', '#4A9B7A');
      root.style.setProperty('--color-inactive', '#6B6B6B');
      root.style.setProperty('--border-color', '#404040');
    } else {
      root.style.setProperty('--bg-primary', '#f9fafb');
      root.style.setProperty('--bg-secondary', '#ffffff');
      root.style.setProperty('--bg-accent', '#f3f4f6');
      root.style.setProperty('--text-primary', '#1f2937');
      root.style.setProperty('--text-secondary', '#374151');
      root.style.setProperty('--text-muted', '#6b7280');
      root.style.setProperty('--color-active', '#059669');
      root.style.setProperty('--color-inactive', '#9ca3af');
      root.style.setProperty('--border-color', '#d1d5db');
    }
  });

  const themeStyles = $derived({
    container: {
      backgroundColor: 'var(--bg-primary)',
      color: 'var(--text-primary)'
    },
    card: {
      backgroundColor: 'var(--bg-secondary)',
      borderColor: 'var(--border-color)',
      color: 'var(--text-primary)'
    },
    accent: {
      backgroundColor: 'var(--bg-accent)',
      color: 'var(--text-primary)'
    },
    input: {
      backgroundColor: 'var(--bg-secondary)',
      borderColor: 'var(--border-color)',
      color: 'var(--text-primary)'
    },
    activeTab: {
      backgroundColor: 'var(--color-active)',
      color: theme === 'dark' ? '#1e1e1e' : '#ffffff'
    },
    inactiveTab: {
      color: 'var(--color-inactive)'
    },
    textPrimary: {
      color: 'var(--text-primary)'
    },
    textSecondary: {
      color: 'var(--text-secondary)'
    },
    textMuted: {
      color: 'var(--text-muted)'
    },
    activeIcon: {
      color: 'var(--color-active)'
    },
    inactiveIcon: {
      color: 'var(--color-inactive)'
    }
  });

  function getSearchResponseKey() {
    const query = quickSearchQuery.toLowerCase();
    if (query.includes('women')) return 'women';
    if (query.includes('terrorism')) return 'terrorism';
    if (query.includes('sharia')) return 'sharia';
    return null;
  }
</script>

<svelte:head>
  <title>Balagh - Da'wah Toolkit</title>
  <meta name="description" content="Islamic Da'wah Toolkit for sharing Islam" />
</svelte:head>

<div class="max-w-md mx-auto min-h-screen" style="background-color: var(--bg-primary); color: var(--text-primary);">
  <!-- Header -->
  <div class="shadow-sm p-4 flex items-center justify-between" style="background-color: var(--bg-secondary); border-color: var(--border-color);">
    <div class="text-center">
      <h1 class="text-xl font-bold leading-tight" style="color: var(--text-primary);">
        Balagh
      </h1>
      <p class="text-sm opacity-75 font-arabic leading-none" style="color: var(--text-secondary);">
        بلاغ
      </p>
    </div>
    <div class="flex items-center space-x-3 relative">
      <!-- Conversations with unread indicator -->
      <div class="relative">
        <button
          onclick={() => {}}
          class="p-2 rounded-lg hover:opacity-70"
        >
          <Users style="color: var(--color-inactive);" size={20} />
        </button>
        {#if unreadMessages > 0}
          <div 
            class="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white"
            style="background-color: #ef4444;"
          >
            {unreadMessages}
          </div>
        {/if}
      </div>

      <!-- Theme Selector -->
      <div class="relative">
        <button
          onclick={() => showThemeSelector = !showThemeSelector}
          class="p-2 rounded-lg hover:opacity-70"
        >
          <Settings style="color: var(--color-inactive);" size={20} />
        </button>
        {#if showThemeSelector}
          <div 
            class="absolute top-12 right-0 rounded-lg border shadow-lg p-3 z-50"
            style="background-color: var(--bg-secondary); border-color: var(--border-color);"
          >
            <div class="text-xs font-medium mb-2 text-center" style="color: var(--text-primary);">
              Themes
            </div>
            <div class="flex space-x-3">
              <button
                onclick={() => { theme = 'light'; showThemeSelector = false; }}
                class="flex flex-col items-center p-2 rounded-lg hover:opacity-80"
                style={theme === 'light' ? 'background-color: var(--bg-accent);' : ''}
              >
                <div class="mb-1 text-yellow-500">☀️</div>
                <span class="text-xs" style="color: var(--text-primary);">Light</span>
              </button>
              <button
                onclick={() => { theme = 'sepia'; showThemeSelector = false; }}
                class="flex flex-col items-center p-2 rounded-lg hover:opacity-80"
                style={theme === 'sepia' ? 'background-color: var(--bg-accent);' : ''}
              >
                <div class="mb-1 text-orange-500">🌅</div>
                <span class="text-xs" style="color: var(--text-primary);">Sepia</span>
              </button>
              <button
                onclick={() => { theme = 'dark'; showThemeSelector = false; }}
                class="flex flex-col items-center p-2 rounded-lg hover:opacity-80"
                style={theme === 'dark' ? 'background-color: var(--bg-accent);' : ''}
              >
                <div class="mb-1 text-blue-500">🌙</div>
                <span class="text-xs" style="color: var(--text-primary);">Dark</span>
              </button>
            </div>
          </div>
        {/if}
      </div>

      <!-- Profile Icon -->
      <button
        onclick={() => activeTab = 'profile'}
        class="p-2 rounded-lg hover:opacity-70"
        style={activeTab === 'profile' ? 'background-color: var(--bg-accent);' : ''}
      >
        <User 
          style={activeTab === 'profile' ? 'color: var(--color-active);' : 'color: var(--color-inactive);'} 
          size={20} 
        />
      </button>
    </div>
  </div>

  <!-- Main Content -->
  <div class="p-4 pb-20">
    {#if activeTab === 'home'}
      <Home 
        {languages} 
        {selectedLanguage} 
        {isOnline} 
        {theme} 
        {themeStyles} 
        {quickReferences} 
        {emergencyKit}
        bind:activeTab
      />
    {/if}

    {#if activeTab === 'dawah'}
      <Dawah 
        {languages} 
        bind:selectedLanguage 
        bind:audienceLanguage
        bind:isOnline 
        {theme} 
        bind:quickSearchQuery
        bind:isRecording
        {smartSuggestions}
        {quickSearchResults}
        {misconceptionResponses}
        {getSearchResponseKey}
      />
    {/if}

    {#if activeTab === 'learn'}
      <Learn 
        bind:learnSearchQuery
        {learningSections}
        {apologeticsTools}
        {theme}
      />
    {/if}

    {#if activeTab === 'location'}
      <Location 
        bind:locationInput
        {locationData}
        {nearbyMosques}
      />
    {/if}

    {#if activeTab === 'test'}
      <Test {theme} />
    {/if}

    {#if activeTab === 'profile'}
      <Profile 
        {languages}
        bind:selectedLanguage
        bind:isOnline
      />
    {/if}
  </div>

  <!-- Bottom Navigation -->
  <div 
    class="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md border-t p-4"
    style="background-color: var(--bg-secondary); border-color: var(--border-color);"
  >
    <div class="flex justify-around">
      <!-- Home Tab -->
      <button
        onclick={() => activeTab = 'home'}
        class="flex flex-col items-center py-3 px-3 rounded-lg transition-all shadow-lg"
        style={activeTab === 'home' 
          ? 'background-color: var(--color-active); color: ' + (theme === 'dark' ? '#1e1e1e' : '#ffffff') + ';'
          : 'color: var(--color-inactive);'}
      >
        <!-- Islamic Star Logo -->
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5L12 2Z"
            fill="currentColor"
          />
          <circle
            cx="12"
            cy="12"
            r="3"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
          />
        </svg>
        <span class="text-xs mt-1 font-medium">Home</span>
      </button>

      <!-- Da'wah Tab -->
      <button
        onclick={() => activeTab = 'dawah'}
        class="flex flex-col items-center py-3 px-3 rounded-lg transition-all shadow-lg"
        style={activeTab === 'dawah' 
          ? 'background-color: var(--color-active); color: ' + (theme === 'dark' ? '#1e1e1e' : '#ffffff') + ';'
          : 'color: var(--color-inactive);'}
      >
        <Mic size={24} />
        <span class="text-xs mt-1 font-medium">Da'wah</span>
      </button>

      <!-- Learn Tab -->
      <button
        onclick={() => activeTab = 'learn'}
        class="flex flex-col items-center py-3 px-3 rounded-lg transition-all shadow-lg"
        style={activeTab === 'learn' 
          ? 'background-color: var(--color-active); color: ' + (theme === 'dark' ? '#1e1e1e' : '#ffffff') + ';'
          : 'color: var(--color-inactive);'}
      >
        <BookOpen size={24} />
        <span class="text-xs mt-1 font-medium">Learn</span>
      </button>

      <!-- Location Tab -->
      <button
        onclick={() => activeTab = 'location'}
        class="flex flex-col items-center py-3 px-3 rounded-lg transition-all shadow-lg"
        style={activeTab === 'location' 
          ? 'background-color: var(--color-active); color: ' + (theme === 'dark' ? '#1e1e1e' : '#ffffff') + ';'
          : 'color: var(--color-inactive);'}
      >
        <MapPin size={24} />
        <span class="text-xs mt-1 font-medium">Location</span>
      </button>

      <!-- Test Tab -->
      <button
        onclick={() => activeTab = 'test'}
        class="flex flex-col items-center py-3 px-3 rounded-lg transition-all shadow-lg"
        style={activeTab === 'test' 
          ? 'background-color: var(--color-active); color: ' + (theme === 'dark' ? '#1e1e1e' : '#ffffff') + ';'
          : 'color: var(--color-inactive);'}
      >
        <GraduationCap size={24} />
        <span class="text-xs mt-1 font-medium">Test</span>
      </button>
    </div>
  </div>
</div>