import Home from '../Pages/Home/Home.vue';
import Solutions from '../Pages/Solutions/Solutions.vue';
import Advertisers from '../Pages/Advertisers/Advertisers.vue';
import Publishers from '../Pages/Publishers/Publishers.vue';
import Contact from '../Pages/Contact/Contact.vue';
import DSP from '../pages/Solutions/DSP.vue';
import Supply from '../pages/Solutions/Supply.vue';
import Audiences from '../pages/Solutions/Audiences.vue';
import Social from '../pages/Solutions/Social.vue';
import Moments from '../pages/Solutions/Moments.vue';
import ConnectedTv from '../pages/Solutions/ConnectedTv.vue';
import CreativeStudio from '../pages/Solutions/CreativeStudio.vue';
import DOOH from '../pages/Solutions/DOOH.vue';
import Audio from '../pages/Solutions/Audio.vue';
import Footfall from '../pages/Solutions/Footfall.vue';
import BrandSafety from '../pages/Solutions/BrandSafety.vue';
import PrivacyPolicy from '../components/PrivacyPolicy.vue'
import CookieNotice from '../components/CookieNotice.vue'
import GDPR from '../components/GDPR.vue'
// import AR from '../pages/Solutions/AR.vue'

const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/solutions',
        component: Solutions,
        name: 'solutions',
        children: [
            {
                path: '/solutions/dsp',
                name: 'dsp',
                component: DSP,
            },
            {
                path: '/solutions/supply',
                name: 'supply',
                component: Supply,
            },
            {
                path: '/solutions/audiences',
                name: 'audiences',
                component: Audiences,
            },
            {
                path: '/solutions/social',
                name: 'social',
                component: Social,
            },
            {
                path: '/solutions/moments',
                name: 'moments',
                component: Moments,
            },
            {
                path: '/solutions/connectedtv',
                name: 'connectedtv',
                component: ConnectedTv,
            },
            {
                path: '/solutions/creativestudio',
                name: 'creativestudio',
                component: CreativeStudio,
            },
            {
                path: '/solutions/dooh',
                name: 'dooh',
                component: DOOH,
            },
            {
                path: '/solutions/audio',
                name: 'audio',
                component: Audio,
            },
            {
                path: '/solutions/footfall',
                name: 'footfall',
                component: Footfall,
            },
            {
                path: '/solutions/brandsafety',
                name: 'brandsafety',
                component: BrandSafety,
            },
        ]
    },
    {
        path: '/advertisers',
        component: Advertisers,
        name: 'advertisers'
    },
    {
        path: '/publishers',
        component: Publishers,
        name: 'publishers'
    },
    {
        path: '/contact',
        component: Contact,
        name: 'contact'
    },
    {
        path: '/privacy',
        component: PrivacyPolicy,
        name: 'privacy'
    },
    {
        path: '/cookie-notice',
        component: CookieNotice,
        name: 'cookie-notice'
    },
    {
        path: '/gdpr',
        component: GDPR,
        name: 'gdpr'
    },
    // {
    //     path: '/ar',
    //     component: AR,
    //     name: 'ar'
    // },
];

export default routes;