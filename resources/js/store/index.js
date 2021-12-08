import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        name: 'card',
        logoUrls: [
            {
                url: "require('../../assets/images/1.png').default",
                alt: ""
            },
            {
                url: "require('../../assets/images/company-logos/logos/1.png').default",
                alt: ""
            },
            {
                url: "require('../../assets/images/company-logos/logos/1.png').default",
                alt: ""
            },
            {
                url: "require('../../assets/images/company-logos/logos/1.png').default",
                alt: ""
            }
        ],
        dspBenefits: [
            {
                id: 0,
                title: 'Greator Reach',
                body: "Reach your target audience across different screens and devices they are using.",
                isOpen: false,
            },
            {
                id: 1,
                title: 'Improved Analytics',
                body: "Understand how your campaign is performing across screens and devices in one unified dashboard.",
                isOpen: false,
            },
            {
                id: 2,
                title: 'Improved Efficiency',
                body: "Get real time insights on all aspects your campaign, including targeting, creatives, troubleshooting, optimization and reporting from all devices on the MediaPal dashboard.",
                isOpen: false,
            },
            {
                id: 3,
                title: 'Better Targeting',
                body: "Reach your audience to precision with advance targeting for all your different goals and on all devices.",
                isOpen: false,
            },
            {
                id: 4,
                title: 'Look-alike Prospecting',
                body: "Identify, target and reach new people with similar characteristics to your existing customers.",
                isOpen: false,
            },
            {
                id: 5,
                title: '3rd-Party Prospecting',
                body: "Identify and reach potential customers who are likely to engage with your brand based on their interests and behaviours.",
                isOpen: false,
            }
        ],
        supplyBenefits: [
            {
                id: 10,
                title: 'Campaign Management',
                body: "Media Supply offers publishers campaign management tools that gives them greater control over their ad inventory distribution.",
                isOpen: false,
            },
            {
                id: 11,
                title: 'Automated Selling',
                body: "MediaPal Supply takes full control over publishers’ ad inventory and handles all the selling streamlining the time-consuming process.",
                isOpen: false,
            },
            {
                id: 12,
                title: 'Real-Time Bidding',
                body: "MediaPal Supply controls the entire bidding process, including choosing the winning advertiser. We do that in an automated fashion through various ad exchanges.",
                isOpen: false,
            },
            {
                id: 13,
                title: 'Ad Yield Optimization',
                body: "Aside from controlling the bidding process and selling ad inventory at premium prices, MediaPal Supply allows publishers to assign soft and hard price floors which prevents selling ad inventory to low bidders.",
                isOpen: false,
            },
            {
                id: 14,
                title: 'Detailed Reporting',
                body: "Having access to in-depth data on your advertising efforts is essential to optimizing them. MediaPal Supply gives publishers access to detailed reporting.",
                isOpen: false,
            },
            // {
            //     id: 15,
            //     title: 'Header Bidding',
            //     body: "Lorem ipsum dolor sit amet consectetur adipisicing elitMaiores libero quibusdam reiciendis Maiores libero quibusdam reiciendis.",
            //     isOpen: false,
            // }
        ],
        dmpBenefits: [
            {
                id: 20,
                title: 'Access to Multi-party Data',
                body: "Make informed decisions on marketing strategies using data from MediaPal and third party data regarding your audience.",
                isOpen: false,
            },
            {
                id: 21,
                title: 'Audience Targeting & Discovery',
                body: "MediaPal data management platform allows you to gain insights into the tastes, preference, behaviors and habits of your audience, which helps in creating effective strategies.",
                isOpen: false,
            },
            {
                id: 22,
                title: 'Streamlined Data',
                body: "Get access to data sets that are related to your audiences and a clearer, more accurate picture of your audience curated from data across all channels and touchpoints.",
                isOpen: false,
            },
            {
                id: 23,
                title: 'Increased Campaign Performance',
                body: "Monitor ongoing campaigns, conduct A/B tests, measure results, and analyze the impact with your data driven marketing. This, in turn, helps to optimize efforts and improve performance on a regular basis.",
                isOpen: false,
            },
            {
                id: 24,
                title: 'Optimized Cross-device Campaign Management',
                body: "Build cross-platform segmented audience data sets that enable Ad attribution and optimize cross-channel advertising to avoid overlapping audiences.",
                isOpen: false,
            },
            {
                id: 25,
                title: 'Automated Campaign Optimization',
                body: "Use an algorithm to get some meaningful insights from data collected regarding your customers and your campaign.",
                isOpen: false,
            }
        ],
        socialBenefits: [
            {
                id: 30,
                title: 'Campaign Management',
                body: "Simply and directly control all aspects of a digital advertising campaign, including targeting, media, creatives, troubleshooting, optimization and reporting.",
                isOpen: false,
            },
            {
                id: 31,
                title: 'Better Audience Targeting',
                body: "Reach the most relevant, highest-value customers at scale to achieve targeting objectives with optimal results.",
                isOpen: false,
            },
            {
                id: 32,
                title: 'Creative Management',
                body: "Get dynamic ads, real-time ad analysis and creative optimisation.",
                isOpen: false,
            },
            {
                id: 33,
                title: 'Cross Platform Measurement',
                body: "Measure extra mile metrics from various social platforms i.e. Twitter conversations such as in-store sales, mobile app installs and other in-app events etc.",
                isOpen: false,
            }
        ],
        doohBenefits: [
            {
                id: 40,
                title: 'Audience Targeting',
                body: "MediaPal Programmatic DOOH gives you the opportunity to display your ad at times when the target audience is most likely to see it, possibly offering huge efficiency gains and better deals on media.",
                isOpen: false,
            },
            {
                id: 41,
                title: 'Campaign Measurement',
                body: "Location data pulled from opted-in audiences is critical for the planning, targeting and measurement of DOOH Campaigns. MediaPal provides location-based, data-driven solutions that help brands measure the effectiveness of DOOH ad campaigns by utilising a number of location data points.",
                isOpen: false,
            },
            {
                id: 42,
                title: 'Mobile Retargeting',
                body: "MediaPal uses aggregated and anonymous, mobile data from privacy-compliant, third-party data providers to gain insights about where specific customer segments move around the city and offer the best DOOH locations to reach them. This way we can send retargeted, personalized messages to each consumer who walked past the board.",
                isOpen: false,
            },
            {
                id: 43,
                title: 'Higher Ad Engagement',
                body: "There’s an opportunity for advertisers and agencies to capitalize on the initial opportunities offered by DOOH and use them to boost awareness and drive conversions. DOOH allows for creative ad campaigns that are both unique and engaging.",
                isOpen: false,
            }
        ],
        audioBenefits: [
            {
                id: 50,
                title: 'Emotionally engaging',
                body: "Digital audio commands the listener’s full attention in a way that other digital formats do not. This leads to listeners feeling intimately connected to the content they are hearing, which sets the stage for a better connection between a listener and a brand and creates a lasting and memorable effect, which means a higher rate of ad recall.",
                isOpen: false,
            },
            {
                id: 51,
                title: 'Listeners are a valuable audience',
                body: "Podcast listeners statistically are more likely to have a college or higher education and higher income earners making them a very valuable segment from a targeting perspective. The fact that a percentage of digital audio listeners don’t do anything else while listening makes them a valuable audience to target.",
                isOpen: false,
            },
            {
                id: 52,
                title: 'Unique targeting options',
                body: "In as much as programmatic audio advertisers can use the same audience targeting parameters from native, display, video and connected TV (CTV) campaigns, programmatic audio gives you the option to fine tune your targeting with data from audio partners to target specific genres, niches, and demographics. This way, you can match your ads to a mood, a genre, or topic.",
                isOpen: false,
            },
            {
                id: 53,
                title: 'Brand message conveyance',
                body: "With programmatic audio is a natural addition to your digital advertising strategy as the bidding, buying, and campaign execution process works the same way as it does with other automated advertising.  Its superpower however lies in the format of the ads. Using sound changes the way a brand’s message is conveyed and received.",
                isOpen: false,
            }
        ]
    },
    mutations: {
        LOG_NAME(state){
            state.name = 'Sandy';
            console.log(state.name)
        }
    },  
    actions: {
        log({ commit }) {
            commit("LOG_NAME")
        }
    },
    getters: {
        GET_URLS(state){
            return state.logoUrls;
        },
        GET_NAME(state){
            return state.name;
        },
        GET_DSP_BENEFITS(state){
            return state.dspBenefits;
        },
        GET_SUPPLY_BENEFITS(state){
            return state.supplyBenefits;
        },
        GET_DMP_BENEFITS(state){
            return state.dmpBenefits;
        },
        GET_SOCIAL_BENEFITS(state){
            return state.socialBenefits;
        },
        GET_DOOH_BENEFITS(state){
            return state.doohBenefits;
        },
        GET_AUDIO_BENEFITS(state){
            return state.audioBenefits;
        }
    },
    setters:{}
})

export default store;