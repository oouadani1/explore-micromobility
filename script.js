const OUTPUTS = {
  bicycle: {
    label: "Standard bicycle",
    shortLabel: "Bicycle"
  },
  ebike: {
    label: "Electric bicycle",
    shortLabel: "E-bike"
  },
  escooter: {
    label: "Electric scooter",
    shortLabel: "E-scooter"
  },
  lowSpeedPoweredMicromobility: {
    label: "Compact e-devices",
    shortLabel: "Compact e-devices"
  },
  cargoBike: {
    label: "Cargo bike",
    shortLabel: "Cargo bike"
  },
  bikeshare: {
    label: "Bikeshare",
    shortLabel: "Bikeshare"
  },
  adaptiveMobility: {
    label: "Adaptive cycles",
    shortLabel: "Adaptive cycles"
  },
    humanPoweredYouth: {
    label: "Age-appropriate mobility options",
    shortLabel: "Youth mobility"
  }
};

const APP_NAME = "Explore Micromobility";
const INTRO_TEXT =
  "Explore Micromobility is a public information tool for browsing micromobility options, such as bikes, e-scooters, and more. Most paths take 7 to 9 questions to find micromobility devices that might work for you. Selecting an answer opens the next question. For the age question, enter an age and use Next. The last answer opens your results.";
const LANDING_PAGE_COPY = {
  en: {
    heroTitle: "Explore Micromobility",
    introText:
      "Explore Micromobility is a public information tool for browsing micromobility options, such as bikes, e-scooters, and more. Most paths take 7 to 9 questions to find micromobility devices that might work for you. Selecting an answer opens the next question. For the age question, enter an age and use Next. The last answer opens your results."
  },
  es: {
    heroTitle: "Explore Micromobility",
    introText:
      "Explore Micromobility es una herramienta pública de información para explorar opciones de micromovilidad, como bicicletas, scooters eléctricos y más. La mayoría de los recorridos toman de 7 a 9 preguntas para encontrar dispositivos de micromovilidad que podrían funcionar para ti. Al seleccionar una respuesta, se abre la siguiente pregunta. En la pregunta sobre la edad, escribe una edad y usa Siguiente. La última respuesta abre tus resultados."
  }
};
const RESULTS_INTRO_TEXT = "Based on your responses, explore these micromobility options.";
const EXPLORING_RESULTS_TITLE_TEXT = "Explore micromobility options.";
const SCORING_DISCLAIMER_TEXT =
  "Explore Micromobility is an informational resource. It does not provide legal, safety, financial, or purchasing advice, and it does not endorse specific products, brands, sellers, or services. Review current laws, local rules, and product details before riding, renting, or purchasing.";
const RESULTS_METHODS_SUMMARY_TEXT = "How results are shown";
const RESULTS_METHODS_TITLE_TEXT = "How the Micromobility Explorer works";
const RESULTS_METHODS_OVERVIEW_TEXT =
  "This tool gives different device types more or fewer points based on your answers. After that, a few extra checks help decide which options show up in the results.";
const RESULTS_METHODS_REPORT_TEXT =
  "The explorer is informed by the Special Commission on Micromobility report filed on January 31, 2026 and by current Massachusetts law and current program information where relevant.";
const RESULTS_METHODS_VISIBILITY_TITLE_TEXT = "Why some options may not show up";
const RESULTS_METHODS_SCORING_TITLE_TEXT = "Your responses";
const RESULTS_METHODS_CURRENT_RESPONSE_TITLE_TEXT = "What helped show these options";
const RESULTS_METHODS_LIMITING_TITLE_TEXT = "What may have lowered other options";
const RESULTS_METHODS_REPORT_LINK_TEXT = "Read the Special Commission report";
const RESULTS_METHODS_BICYCLE_LAW_LINK_TEXT = "Massachusetts law about bicycles";
const RESULTS_REASON_HEADING_TEXT = "Why this option may be a good fit";
const RESULTS_GUIDANCE_HEADING_TEXT = "What to know about this option";
const RESULTS_NEXT_STEPS_HEADING_TEXT = "More resources for this option";
const FEEDBACK_PROMPT_TEXT =
  '<strong>Love this idea? Think it needs more work? Let us know your thoughts at <a href="mailto:thelab@dot.state.ma.us">thelab@dot.state.ma.us</a>.</strong>';
const REPORT_URL = "https://www.mass.gov/doc/special-commission-on-micromobility-report-january-2026/download";
const BICYCLE_LAW_URL = "https://www.mass.gov/info-details/massachusetts-law-about-bicycles";
const PRINT_ICON_SVG =
  '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7 9V4h10v5"/><path d="M7 14H5a2 2 0 0 1-2-2v-1.5A2.5 2.5 0 0 1 5.5 8h13A2.5 2.5 0 0 1 21 10.5V12a2 2 0 0 1-2 2h-2"/><path d="M7 12h10v8H7z"/><circle cx="17.5" cy="10.5" r=".75" fill="currentColor" stroke="none"/></svg>';
const RECOMMENDATION_IMAGE_ALT_TEXT = {
  bicycle: "Traditional two-wheel bicycle",
  ebike: "Step-through electric bicycle",
  escooter: "Standing electric scooter",
  lowSpeedPoweredMicromobility: "Electric skateboard, one-wheel board, and compact standing e-scooter devices",
  cargoBike: "Long-tail cargo bicycle",
  adaptiveMobility: "Adaptive cycles including a recumbent tricycle, upright tricycle, and handcycle",
  bikeshare: "Station-based shared bicycles",
  humanPoweredYouth: "Youth bicycle, child seat, scooter, and roller skates"
};

const DEVICE_CONTENT = {
  bicycle: {
    image: "Bicycle.png",
    cost: "$300-$1,500",
    whyBase: "A standard bicycle is a versatile option for everyday riding.",
    // WHY CONDITIONAL
    // Active text slots under current logic: recreation, transitLinkYes, carryChildrenYes, routeRegularRoads, routeTrails
    whyConditional: {
      // Age
      age3to13: "",
      age14to16: "",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      adaptiveNeedYes: "",
      adaptiveNeedNo: "",
      // Primary use
      transport: "",
      deliveries: "Additionally, some adaptive cycles can be configured to carry work items, equipment, or larger everyday loads.",
      recreation: "It is especially well suited for recreation and exercise.",
      // Transit link
      transitLinkYes: "Connecting to transit is also convenient with a bicycle.",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "With the right child-carrying setup, it can work for bringing a child.",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "",
      distance3to9: "",
      distance10plus: "",
      // Route type
      routeBikeLanes: "Separated bike lanes can also make this type of device easier to use comfortably and consistently.",
      routeMixedRoads: "",
      routeRegularRoads: "",
      routeTrails: "Some types of bikes, such as mountain bikes, are commonly used on trails and unpaved paths.",
      // Storage
      storageIndoor: "Indoor storage can support security, weather protection, and charging needs for some adaptive models.",
      storageOutdoor: "",
      storageNotMajorConcern: ""
    },
    considerBase: [
      "A standard bicycle is simple, reliable, and low-cost to maintain. It requires more physical effort than e-devices, and may feel less comfortable on longer or hillier trips, but it is also a great source of exercise."
    ],
    // CONSIDER CONDITIONAL
    // Active text slots under current logic: transitLinkYes, carryChildrenYes, distance10plus, storageOutdoor
    considerConditional: {
      // Age
      age3to13: "",
      age14to16: "",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      adaptiveNeedYes: "",
      adaptiveNeedNo: "",
      // Primary use
      transport: "",
      deliveries: "",
      recreation: "",
      // Transit link
      transitLinkYes: "Check Massachusetts Bay Transportation Authority (MBTA) or your local Regional Transit Authority (RTA) rules before bringing a bicycle on a bus or train, and look into nearby station bike parking or bike shed options where available. See Next steps for more information.",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "If carrying a child is a priority, the right setup will depend on the child's age and the bike. Options can include a child seat, trailer, or tag-along attachment. Make sure they wear properly fitted helmets and are secured in appropriate seats or harnesses.",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "",
      distance3to9: "",
      distance10plus: "Investing in a high-quality seat and ensuring your bike fits you well for long distance trips can make your ride more comfortable.",
      // Route type
      routeBikeLanes: "",
      routeMixedRoads: "",
      routeRegularRoads: "",
      routeTrails: "",
      // Storage
      storageIndoor: "",
      storageOutdoor: "When storing a bike outdoors, consider a high-quality lock and a safe place for parking.",
      storageNotMajorConcern: ""
    },
    nextSteps: [
      { label: "Learn more about bicycles", url: "https://canva.link/nrvd5v2bvwbf99v" },
      { label: "Visit your local bike shop", url: "https://nbda.com/dealer-finder-member-directory/#!directory/map/tag=Massachusetts" },
      { label: "More shops on Pinkbike", url: "https://www.pinkbike.com/directory/list/massachusetts/2/bike-shop/" },
      { label: "More shops on Singletracks", url: "https://www.singletracks.com/bike-shops/region/massachusetts/" },
      { label: "Join a bike-friendly event", url: "https://www.massbike.org/massachusetts-bike-friendly-events-calendar" }
    ]
  },
  ebike: {
    image: "E-bike.png",
    cost: "$1,000-$6,000",
    whyBase: "An e-bike can make everyday trips easier and less tiring.",
    // WHY CONDITIONAL
    // Active text slots under current logic: transport, deliveries, recreation, transitLinkYes, carryChildrenYes, distanceUnder3, distance3to9, distance10plus, routeBikeLanes, routeMixedRoads, routeRegularRoads, routeTrails
    whyConditional: {
      // Age
      age3to13: "",
      age14to16: "",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      adaptiveNeedYes: "",
      adaptiveNeedNo: "",
      // Primary use
      transport: "",
      deliveries: "The electric-assist makes it great for work and deliveries.",
      recreation: "It can also be a comfortable option for recreation or exercise, especially if you want help with hills or longer rides.",
      
      // Transit link
      transitLinkYes: "Connecting to transit is easier with an e-bike.",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "Some models can also support carrying children or extra cargo.",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "",
      distance3to9: "",
      distance10plus: "It can make longer distances more manageable.",
      // Route type
      routeBikeLanes: "",
      routeMixedRoads: "",
      routeRegularRoads: "Because they can keep up with traffic better, e-bikes feel more comofortable on roads without bike lanes",
      routeTrails: "E-bikes are only allowed on some Massachusetts trails, and at limited speeds. Check your local Department of Conservation and Recreation (DCR) regulations to learn more.",
      // Storage
      storageIndoor: "",
      storageOutdoor: "",
      storageNotMajorConcern: ""
    },
    considerBase: [
      "Choose e-bikes with batteries and electrical systems certified to Underwriters Laboratories (UL) safety standards.",
      "Since they can look similiar, be careful not to confuse an e-bike with a higher-powered e-moto or e-dirt bike, which are considered Off-Highway Vehicles (OHVs) and must be registered with the Massachusetts Environmental Police.",
      "E-bikes come in three classes. See Next steps to select the best e-bike class for you."
    ],
    // CONSIDER CONDITIONAL
    // Active text slots under current logic: age14to16, age17to49, age50plus, transport, transitLinkYes
    considerConditional: {
      // Age
      age3to13: "",
      age14to16: "For ages 14 to 16, this explorer shows Class 1 e-bikes. This reflects the tool's current implementation of the Special Commission on Micromobility report and current Massachusetts rules.",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      adaptiveNeedYes: "",
      adaptiveNeedNo: "",
      // Primary use
      transport: "",
      deliveries: "Prioritize a model with a high-capacity removable battery, strong brakes, and a mid-drive motor for hills and heavy loads.",
      recreation: "",
      recreation: "",
      // Transit link
      transitLinkYes: "Check Massachusetts Bay Transportation Authority (MBTA) or your local Regional Transit Authority (RTA) rules before bringing a device on a bus or train, and look into nearby station bike parking or bike shed options where available. See Next steps for more information.",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "When carrying children is part of the trip, common setups include a child seat, tag-along attachment, or trailer. Children should wear properly fitted helmets and use appropriate seats or harnesses.",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "",
      distance3to9: "",
      distance10plus: "",
      // Route type
      routeBikeLanes: "",
      routeMixedRoads: "",
      routeRegularRoads: "",
      routeTrails: "",
      // Storage
      storageIndoor: "Follow safe charging practices when storing an e-bike indoors to avoid the risk of thermal runaway and fire. See Next steps for more information on safe charging.",
      storageOutdoor: "When storing an e-bike outdoors, always remove the battery, consider a high-quality lock, and ensure it is parked in a safe place.",
      storageNotMajorConcern: ""
    },
    nextSteps: [
      { label: "Learn more about e-bikes.", url: "https://canva.link/ez6c09mq8tpfpk4" },
      { label: "Visit a local bike shop.", url: "https://nbda.com/dealer-finder-member-directory/#!directory/map/tag=Massachusetts" },
      { label: "More shops on Pinkbike", url: "https://www.pinkbike.com/directory/list/massachusetts/2/bike-shop/" },
      { label: "More shops on Singletracks", url: "https://www.singletracks.com/bike-shops/region/massachusetts/" },
      { label: "Join a bike-friendly event.", url: "https://www.massbike.org/massachusetts-bike-friendly-events-calendar" },
      { label: "Check state e-bike incentives.", url: "https://goclean.masscec.com/clean-energy-solutions/electric-bicycles/" }
    ]
  },
  escooter: {
    image: "E-Scooter.png",
    cost: "$500-$2,000",
    whyBase: "An e-scooter is a practical option for quick trips.",
    // WHY CONDITIONAL
    // Active text slots under current logic: transport, recreation, transitLinkYes, distanceUnder3, routeBikeLanes, routeMixedRoads
    whyConditional: {
      // Age
      age3to13: "",
      age14to16: "",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      adaptiveNeedYes: "",
      adaptiveNeedNo: "",
      // Primary use
      transport: "",
      deliveries: "",
      recreation: "",
      // Transit link
      transitLinkYes: "This option can pair well with public transit because many e-scooters can be folded.",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "Some configurations can also support carrying children with the right seating or cargo setup.",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "",
      distance3to9: "",
      distance10plus: "",
      // Route type
      routeBikeLanes: "",
      routeMixedRoads: "On roads with only a few bike lanes, e-scooters can be a decent choice, but your comfort will depend on the smoothness of the road and how heavy traffic is.",
      routeRegularRoads: "",
      routeTrails: "",
      // Storage
      storageIndoor: "Storing e-scooters indoors is easy due to their compact size.",
      storageOutdoor: "",
      storageNotMajorConcern: ""
    },
    considerBase: [
      "Choose e-scooters with batteries and electrical systems certified to Underwriters Laboratories (UL) safety standards."
    ],
    // CONSIDER CONDITIONAL
    // Active text slots under current logic: none
    considerConditional: {
      // Age
      age3to13: "",
      age14to16: "",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      adaptiveNeedYes: "",
      adaptiveNeedNo: "",
      // Primary use
      transport: "",
      deliveries: "",
      recreation: "",
      // Transit link
      transitLinkYes: "Given you use transit during your commute, check Massachusetts Bay Transportation Authority (MBTA) or your local Regional Transit Authority (RTA) rules before bringing an e-scooter onto a bus or train. See Next steps for more information on micromobility and transit.",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "",
      distance3to9: "",
      distance10plus: "",
      // Route type
      routeBikeLanes: "Due to their small wheels, standing position, and lack of suspension, e-scooters perform best on bike lanes and smooth paths.",
      routeMixedRoads: "Due to their small wheels, standing position, and lack of suspension, e-scooters can feel less comfortable on rougher roads or in heavier traffic. Models with suspension and all-season tires may be more suitable in those conditions.",
      routeRegularRoads: "",
      routeTrails: "",
      // Storage
      storageIndoor: "Follow safe charging practices when storing an e-scooter indoors to avoid the risk of thermal runaway and fire. See Next steps for more information on safe charging.",
      storageOutdoor: "",
      storageNotMajorConcern: ""
    },
    nextSteps: [
      { label: "Learn more about e-scooters", url: "https://canva.link/t5ka95rvio5ijw3" }
    ]
  },
  lowSpeedPoweredMicromobility: {
    image: "low-power-mobility.png",
    cost: "$300-$2,500",
    whyBase: "Compact e-devices can work for short trips because of their size and portability.",
    // WHY CONDITIONAL
    // Active text slots under current logic: transport, recreation, transitLinkYes, distanceUnder3, routeBikeLanes, routeTrails
    whyConditional: {
      // Age
      age3to13: "",
      age14to16: "",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      adaptiveNeedYes: "",
      adaptiveNeedNo: "",
      // Primary use
      transport: "",
      deliveries: "",
      recreation: "Using them recreationally can provide a decent, low-impact exercise because they require leg and core strength to maintain balance and maneuverability.",
      // Transit link
      transitLinkYes: "Taking public transit with these devices is seamless because they are portable.",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "",
      distance3to9: "",
      distance10plus: "",
      // Route type
      routeBikeLanes: "These devices are best where there are dedicated bike lanes or smooth shared use paths.",
      routeMixedRoads: "",
      routeRegularRoads: "",
      routeTrails: "These devices work well on off-road trails or parks if the surfaces are paved and smooth.",
      // Storage
      storageIndoor: "Relatedly, storing compact e-devices indoors is easy due to their size.",
      storageOutdoor: "",
      storageNotMajorConcern: ""
    },
    considerBase: [
      "Compact e-devices require decent leg and core strength to safely balance and maneuver them.",
    ],
    // CONSIDER CONDITIONAL
    // Active text slots under current logic: none
    considerConditional: {
      // Age
      age3to13: "",
      age14to16: "",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      adaptiveNeedYes: "",
      adaptiveNeedNo: "",
      // Primary use
      transport: "While they are ideal for short commutes, you should already be comfortable navigating busy areas on two wheels before considering a compact e-device.",
      deliveries: "",
      recreation: "",
      // Transit link
      transitLinkYes: "Given you use transit during your commute, check Massachusetts Bay Transportation Authority (MBTA) or your local Regional Transit Authority (RTA) rules before bringing these devices onto a bus or train. See Next steps for more information on micromobility and transit. Additionally, while small, these devices can be heavy to carry. Consider a specialized backpack to carry them with.",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "",
      distance3to9: "",
      distance10plus: "",
      // Route type
      routeBikeLanes: "",
      routeMixedRoads: "",
      routeRegularRoads: "",
      routeTrails: "Check your local park or trail rules before purchasing a compact e-device, as some municipalities do not allow them.",
      // Storage
      storageIndoor: "Follow safe charging practices when storing a compact e-device indoors to avoid the risk of thermal runaway and fire. See Next steps for more information on safe charging.",
      storageOutdoor: "",
      storageNotMajorConcern: ""
    },
    nextSteps: [
      { label: "Learn more about compact e-devices", url: "https://canva.link/60attcpjzby1bki" }
    ]
  },
  cargoBike: {
    image: "Cargo_bike.png",
    cost: "$1,500-$7,500",
    whyBase: "A cargo bike is a great option when a standard bike may not carry enough.",
    // WHY CONDITIONAL
    // Active text slots under current logic: transport, deliveries, carryChildrenYes, distanceUnder3, distance3to9, distance10plus, routeBikeLanes, routeRegularRoads
    whyConditional: {
      // Age
      age3to13: "",
      age14to16: "",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      adaptiveNeedYes: "",
      adaptiveNeedNo: "",
      // Primary use
      transport: "It is especially useful for running errands such as getting groceries, hauling supplies, or carrying larger items.",
      deliveries: "It is great for working and making deliveries, and can support heavy-duty daily use.",
      recreation: "",
      // Transit link
      transitLinkYes: "",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "Carrying children with cargo bikes is an excellent and fun option because they are designed to carry people securely.",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "",
      distance3to9: "",
      // Route type
      routeBikeLanes: "",
      routeMixedRoads: "",
      routeRegularRoads: "A cargo bike's larger size can feel more stable and visible on roads with heavier traffic.",
      routeTrails: "",
      // Storage
      storageIndoor: "",
      storageOutdoor: "",
      storageNotMajorConcern: ""
    },
    considerBase: [
      "Ensure the cargo bike style is designed for the weight and type of items you plan to carry.",
    ],
    // CONSIDER CONDITIONAL
    // Active text slots under current logic: carryChildrenYes
    considerConditional: {
      // Age
      age3to13: "",
      age14to16: "",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      adaptiveNeedYes: "",
      adaptiveNeedNo: "",
      // Primary use
      transport: "",
      deliveries: "Because you plan to work with your micromobility device, consider an electric-assist cargo bike to help you get around easily. Also prioritize a model with a high-capacity removable battery, strong brakes, and a mid-drive motor for hills and heavy loads.",
      recreation: "",
      // Transit link
      transitLinkYes: "Given you use transit during your commute, consider that cargo bikes are heavy and long and may not fit onto trains or station elevators, or may not be allowed on transit at all. If you decide a cargo bike is the right fit for you, consider station parking or nearby bicycle parking sheds. ",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "Since you will carry children, make sure they wear properly fitted helmets and are secured in appropriate seats or harnesses.",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "",
      distance3to9: "",
      distance10plus: "Consider an electric cargo bike if you'll mostly travel longer distances.",
      // Route type
      routeBikeLanes: "",
      routeMixedRoads: "",
      routeRegularRoads: "",
      routeTrails: "",
      // Storage
      storageIndoor: "Cargo bikes are not ideal to store indoors because of their heavy weight and length. If you plan to store one inside a shed or garage and it has a battery, follow safe charging practices to avoid the risk of thermal runaway and fire. See Next steps for more information on safe charging.",
      storageOutdoor: "If you plan to to store a cargo bike outdoors, always remove the battery (if it has one), consider a high-quality lock and weatherproof tarp, and ensure it is parked in a safe place.",
      storageNotMajorConcern: ""
    },
    nextSteps: [
      { label: "Learn more about cargo bikes.", url: "https://canva.link/gcyamow1yonirts" },
      { label: "Borrow a cargo bike for free to explore how it works in practice.", url: "https://cpp.ebikelibrary.org/" },
      { label: "Visit a local bike shop.", url: "https://nbda.com/dealer-finder-member-directory/#!directory/map/tag=Massachusetts" },
      { label: "More shops on Pinkbike", url: "https://www.pinkbike.com/directory/list/massachusetts/2/bike-shop/" },
      { label: "More shops on Singletracks", url: "https://www.singletracks.com/bike-shops/region/massachusetts/" },
    ]
  },
  bikeshare: {
    image: "Bikeshare-v2.png",
    cost: "$0-$120 per year depending on bikeshare membership or discounts",
    whyBase: "Bikeshare could be an excellent option for you if you want the convenience of riding without needing to own or store a device.",
    // WHY CONDITIONAL
    // Active text slots under current logic: transport, transitLinkYes, distanceUnder3, routeBikeLanes, storageOutdoor
    whyConditional: {
      // Age
      age3to13: "",
      age14to16: "",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      adaptiveNeedYes: "",
      adaptiveNeedNo: "",
      // Primary use
      transport: "It works especially well for everyday commuting since bikeshare docks are conveniently located near schools and workplaces.",
      deliveries: "",
      recreation: "",
      // Transit link
      transitLinkYes: "Connecting to transit with bikeshare is easy because docks are often located near transit stations.",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "",
      distance3to9: "",
      distance10plus: "",
      // Route type
      routeBikeLanes: "",
      routeMixedRoads: "",
      routeRegularRoads: "",
      routeTrails: "",
      // Storage
      storageIndoor: "",
      storageOutdoor: "Bikeshare is also a great option because you need to store your device outdoors.",
      storageNotMajorConcern: ""
    },
    considerBase: [
      "There are several bikeshare systems in Massachusetts, including Bluebikes, Metro Mobility, ValleyBike Share, CargoB, Minuteman Bikeshare, and Port Bikeshare.",
      "Verify whether a bikeshare system is available near your starting point and destination.",
      "Many bikeshare companies, health insurance providers, universities, employers, or municipalities offer discounted prices. Check your providers to learn more.",
      "If you participate in programs like the Supplemental Nutrition Assistance Program (SNAP) or MassHealth, or have a qualifying income, you are eligible for a $50/year Bluebikes membership.",
      "If you live in the City of Boston and have not had an annual membership recently, you may be eligible for a $60/year Bluebikes membership, or $5/year if you have a qualifying income.",
      "Consider downloading your local bikeshare app and setting it up at home before your trip.",
      "Most bikeshare systems offer a choice between e-bikes and standard bikes.",
      "Most bikeshare systems do not provide helmets, so riders should plan to bring one.",
      ""
    ],
    // CONSIDER CONDITIONAL
    considerConditional: {
      // Age
      age3to13: "",
      age14to16: "",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      adaptiveNeedYes: "",
      adaptiveNeedNo: "",
      // Primary use
      transport: "",
      deliveries: "",
      recreation: "",
      // Transit link
      transitLinkYes: "",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "",
      distance3to9: "",
      distance10plus: "",
      // Route type
      routeBikeLanes: "",
      routeMixedRoads: "",
      routeRegularRoads: "",
      routeTrails: "",
      // Storage
      storageIndoor: "",
      storageOutdoor: "",
      storageNotMajorConcern: ""
    },
    nextSteps: [
      { label: "Learn more about bikeshare", url: "https://canva.link/b11lytyb0ic1dgc" },
      { label: "Check Massachusetts bikeshare programs and discount pricing", url: "https://goclean.masscec.com/homeowners/bike-share-programs/" },
      { label: "Check Bluebikes income-eligible discount", url: "https://bluebikes.com/pricing/income-eligible-program" },
      { label: "Check Bluebikes City of Boston discount", url: "https://www.boston.gov/departments/boston-bikes/discounted-bluebikes" }
    ]
  },
  adaptiveMobility: {
    image: "Adaptive-v3.png",
    cost: "$2,500-$10,000",
    whyBase: "An adaptive cycle can be a versatile way to get around.",
    // WHY CONDITIONAL
    // Active text slots under current logic: adaptiveNeedYes, transport, recreation, distanceUnder3, distance3to9, distance10plus, routeBikeLanes, routeRegularRoads, routeTrails
    whyConditional: {
      // Age
      age3to13: "",
      age14to16: "",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      adaptiveNeedYes: "They are an excellent choice if you have a disability or need mobility assistance, as they are designed to adapt to different disabilities, comfort levels, and use cases.",
      adaptiveNeedNo: "",
      // Primary use
      transport: "Additionally, many are built with everyday commuting in mind, and some can even carry larger loads.",
      deliveries: "Additionally, some adaptive cycles can be configured to carry work items, equipment, or larger everyday loads.",
      recreation: "Additionally, many are built with a comfortable or reclined seating position, making them a nice choice for casual recreation and exercise.",
      // Transit link
      transitLinkYes: "",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "Some configurations can also support carrying children with the right seating or cargo setup.",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "",
      distance3to9: "",
      distance10plus: "",
      // Route type
      routeBikeLanes: "Separated bike lanes can also make this type of device easier to use comfortably and consistently.",
      routeMixedRoads: "",
      routeRegularRoads: "",
      routeTrails: "",
      // Storage
      storageIndoor: "Indoor storage can support security, weather protection, and charging needs for some adaptive models.",
      storageOutdoor: "",
      storageNotMajorConcern: ""
    },
    considerBase: [
      "Adaptive cycles come in a range of styles. Consider looking into recumbent bikes, tricycles, and hand-powered cycles.",
    ],
    // CONSIDER CONDITIONAL
    // Active text slots under current logic: adaptiveNeedYes
    considerConditional: {
      // Age
      age3to13: "",
      age14to16: "The best adaptive cycles for young people with disabilities are highly adjustable for growth and comfort, have a parking brake to allow for safe rest, and are designed to let a caregiver steer or help with balance if needed.",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      adaptiveNeedYes: "Key features to consider for stability, safety, and reduced physical strain are devices with three or four wheels, electric-assist, wide seats with back support, and low step-through frames.",
      adaptiveNeedNo: "",
      // Primary use
      transport: "",
      deliveries: "",
      recreation: "",
      // Transit link
      transitLinkYes: "",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "Consider an electric cargo trike, which are stable, safe, and spacious, if you have a disability and are carrying a child. Make sure they wear properly fitted helmets and are secured in appropriate seats or harnesses.", 
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "",
      distance3to9: "",
      distance10plus: "",
      // Route type
      routeBikeLanes: "",
      routeMixedRoads: "",
      routeRegularRoads: "",
      routeTrails: "",
      // Storage
      storageIndoor: "Adaptive cycles are not ideal to store indoors due to their weight and length. If you are storing one inside a shed or garage and it has an electric motor, follow safe charging practices to avoid the risk of thermal runaway and fire.",
      storageOutdoor: "If you are storing an adaptive cycle outdoors, always remove the battery if it has one, use a high-quality lock and weatherproof cover, and make sure it is parked in a safe place.",
      storageNotMajorConcern: ""
    },    
    nextSteps: [
      { label: "Learn more about adaptive cycles", url: "https://canva.link/nj039whwwsd7466" },
      { label: "Join an accessible cycling event", url: "https://www.mass.gov/accessible-cycling" },
      { label: "Learn more about the Department of Conservation and Recreation Universal Access Program", url: "https://www.mass.gov/orgs/universal-access-program" },
      { label: "Check out the Department of Conservation and Recreation adaptive cycling equipment list", url: "https://www.mass.gov/info-details/adaptive-cycling-equipment" },
      { label: "Try the Department of Conservation and Recreation power-driven mobility devices", url: "https://www.mass.gov/info-details/dcr-power-driven-mobility-devices" }
    ],
  },
  humanPoweredYouth: {
    image: "youth-mobility.png",
    cost: "$50-$500 depending on device type",
    whyBase: "Age-appropriate mobility options can help younger riders build confidence and skills over time.",
    // WHY CONDITIONAL
    // Active text slots under current logic: recreation, distanceUnder3, routeTrails
    whyConditional: {
      // Age
      age3to13: "",
      age14to16: "",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      adaptiveNeedYes: "",
      adaptiveNeedNo: "",
      // Primary use
      transport: "",
      deliveries: "",
      recreation: "These options are commonly used for recreation, practice, and everyday neighborhood riding.",
      // Transit link
      transitLinkYes: "",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "They are especially well suited for shorter trips.",
      distance3to9: "",
      distance10plus: "",
      // Route type
      routeBikeLanes: "",
      routeMixedRoads: "",
      routeRegularRoads: "",
      routeTrails: "Parks, smooth paths, and other lower-stress riding areas are an ideal environment for these options.",
      // Storage
      storageIndoor: "",
      storageOutdoor: "",
      storageNotMajorConcern: ""
    },
    considerBase: [
      "Age-appropriate options may include kick scooters, rollerblades, bicycles, or tricycles depending on age, comfort, and coordination.",
      "Choose a device that matches the rider’s confidence level and the kinds of places where they will ride.",
      "Start in parks, backyards, or low-traffic streets, and always use a properly fitted helmet and other protective gear."
    ],
    // CONSIDER CONDITIONAL
    // Active text slots under current logic: age3to13
    considerConditional: {
      // Age
      age3to13: "Children ages 9 to 12 can often ride bicycles and kick scooters confidently, but faster motorized devices are generally not appropriate because balancing, steering, and risk-taking behaviors can make them harder to use safely.",
      age14to16: "",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      adaptiveNeedYes: "",
      adaptiveNeedNo: "",
      // Primary use
      transport: "",
      deliveries: "",
      recreation: "",
      // Transit link
      transitLinkYes: "",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "",
      distance3to9: "",
      distance10plus: "",
      // Route type
      routeBikeLanes: "",
      routeMixedRoads: "",
      routeRegularRoads: "",
      routeTrails: "",
      // Storage
      storageIndoor: "",
      storageOutdoor: "",
      storageNotMajorConcern: ""
    },
    nextSteps: [
      { label: "Learn more about youth mobility options", url: "https://canva.link/60qopm17rsnhlls" },
      { label: "Visit a local bike shop", url: "https://nbda.com/dealer-finder-member-directory/#!directory/map/tag=Massachusetts" },
      { label: "More shops on Pinkbike", url: "https://www.pinkbike.com/directory/list/massachusetts/2/bike-shop/" },
      { label: "More shops on Singletracks", url: "https://www.singletracks.com/bike-shops/region/massachusetts/" },
      { label: "Explore Safe Routes to School resources", url: "https://www.mass.gov/safe-routes-to-school" },
      { label: "Read Consumer Product Safety Commission age-appropriate product guidance", url: "https://www.cpsc.gov/content/2020-Age-Determination-Guidelines" }
    ]
  }
};

const EXPLORE_REASON_TEXT = {
  bicycle:
    "A standard bicycle is a versatile option for everyday riding, recreation, and many short trips. It can also work well for carrying a child with the right add-ons, for connecting to transit, or for riding on trails and unpaved paths with the right bike type.",
  ebike:
    "An e-bike can make everyday trips easier and less tiring, especially for longer rides, hills, or carrying extra weight. It can also work well for recreation, deliveries, transit connections, and some child-carrying or cargo needs depending on the model.",
  escooter:
    "An e-scooter can be a practical option for quick trips, especially when compact storage and transit connections matter. It tends to work best on smooth routes, bike lanes, and other lower-stress riding environments.",
  lowSpeedPoweredMicromobility:
    "Compact e-devices can work for short trips because they are portable and easy to store. They tend to work best on smoother routes, bike lanes, and paved park paths.",
  cargoBike:
    "A cargo bike can be a strong option when a standard bike may not carry enough. It is especially useful for hauling groceries, supplies, children, or heavier everyday loads, and can also support delivery use depending on the setup.",
  bikeshare:
    "Bikeshare can be a strong option if flexibility matters more than ownership. It often works well for short trips, errands, and transit connections, especially in places where bike docks are easy to find.",
  adaptiveMobility:
    "An adaptive cycle can be a strong option when comfort, stability, or physical support are especially important. Different adaptive designs can work for transportation, recreation, or rider-specific mobility needs depending on the setup.",
  humanPoweredYouth:
    "Age-appropriate mobility options can help younger riders build confidence and skills over time. These options are commonly used for recreation, practice, and shorter trips in parks, paths, and other lower-stress riding areas."
};

const SCORING_RULES = {
    age: {
    age3to13: {
      bicycle: 0,
      ebike: 0,
      escooter: 0,
      cargoBike: 0,
      adaptiveMobility: 0,
      bikeshare: 0,
      humanPoweredYouth: 10
    },
    age14to16: {
      bicycle: 2,
      ebike: 1,
      escooter: 0,
      cargoBike: 0,
      adaptiveMobility: 0,
      bikeshare: 0,
      humanPoweredYouth: 0
    },
    age17to49: {
      bicycle: 0,
      ebike: 0,
      escooter: 0,
      cargoBike: 0,
      adaptiveMobility: 0,
      bikeshare: 0,
      humanPoweredYouth: 0
    },
    age50plus: {
      bicycle: 0,
      ebike: 1,
      escooter: 0,
      cargoBike: 0,
      adaptiveMobility: 3,
      bikeshare: 0,
      humanPoweredYouth: 0
    }
  },

  adaptiveNeed: {
    yes: {
      bicycle: 1,
      ebike: 1,
      escooter: 0,
      cargoBike: 1,
      adaptiveMobility: 3,
      bikeshare: 0
    },
    no: {
      bicycle: 0,
      ebike: 0,
      escooter: 0,
      cargoBike: 0,
      adaptiveMobility: 0,
      bikeshare: 0
    }
  },

  primaryUse: {
    transport: {
      bicycle: 1,
      ebike: 2,
      escooter: 2,
      lowSpeedPoweredMicromobility: 1,
      cargoBike: 1,
      adaptiveMobility: 0,
      bikeshare: 2
    },
    deliveries: {
      bicycle: 1,
      ebike: 3,
      escooter: 0,
      cargoBike: 3,
      adaptiveMobility: 0,
      bikeshare: 0
    },
    recreation: {
      bicycle: 3,
      ebike: 1,
      escooter: 1,
      lowSpeedPoweredMicromobility: 1,
      cargoBike: 0,
      adaptiveMobility: 2,
      bikeshare: 1
    }
  },

  transitLink: {
    yes: {
      bicycle: 1,
      ebike: 1,
      escooter: 2,
      lowSpeedPoweredMicromobility: 1,
      bikeshare: 2
    },
    no: {
      bicycle: 0,
      ebike: 0,
      escooter: 0,
      lowSpeedPoweredMicromobility: 0,
      cargoBike: 0,
      adaptiveMobility: 0,
      bikeshare: 0
    }
  },

  carryChildren: {
    yes: {
      bicycle: 1,
      ebike: 1,
      escooter: 0,
      cargoBike: 3,
      adaptiveMobility: 1,
      bikeshare: 0
    },
    no: {
      bicycle: 0,
      ebike: 0,
      escooter: 0,
      cargoBike: 0,
      adaptiveMobility: 0,
      bikeshare: 0
    }
  },

  distance: {
    under3: {
      bicycle: 2,
      ebike: 0,
      escooter: 2,
      lowSpeedPoweredMicromobility: 2,
      cargoBike: 1,
      adaptiveMobility: 1,
      bikeshare: 2
    },
    "3to9": {
      bicycle: 1,
      ebike: 2,
      escooter: 1,
      lowSpeedPoweredMicromobility: 0,
      cargoBike: 2,
      adaptiveMobility: 1,
      bikeshare: 1
    },
    "10plus": {
      bicycle: 1,
      ebike: 2,
      escooter: 0,
      cargoBike: 2,
      adaptiveMobility: 1,
      bikeshare: 0
    }
  },

  routeType: {
    bikeLanes: {
      bicycle: 1,
      ebike: 1,
      escooter: 1,
      lowSpeedPoweredMicromobility: 1,
      cargoBike: 1,
      adaptiveMobility: 1,
      bikeshare: 1
    },
    mixedRoads: {
      bicycle: 0,
      ebike: 0,
      escooter: -2,
      lowSpeedPoweredMicromobility: -3,
      cargoBike: 0,
      adaptiveMobility: 0,
      bikeshare: 0
    },
    regularRoads: {
      bicycle: 0,
      ebike: 1,
      escooter: 0,
      lowSpeedPoweredMicromobility: -3,
      cargoBike: 2,
      adaptiveMobility: 0,
      bikeshare: 0
    },
    trails: {
      bicycle: 2,
      ebike: 1,
      escooter: 0,
      lowSpeedPoweredMicromobility: 1,
      cargoBike: 0,
      adaptiveMobility: 1,
      bikeshare: 0
    }
  },

  storage: {
    indoor: {
      bicycle: 1,
      ebike: 1,
      escooter: 1,
      lowSpeedPoweredMicromobility: 2,
      cargoBike: 0,
      adaptiveMobility: -1,
      bikeshare: 1
    },
    outdoor: {
      bicycle: 2,
      ebike: 1,
      escooter: 1,
      cargoBike: 0,
      adaptiveMobility: 0,
      bikeshare: 2
    },
    notMajorConcern: {
      bicycle: 0,
      ebike: 0,
      escooter: 0,
      cargoBike: 0,
      adaptiveMobility: 0,
      bikeshare: 0
    }
  }
};

function getDeviceContent(recId) {
  const locale = getCurrentLocale();
  const baseContent = DEVICE_CONTENT[recId] || null;
  const localizedContent = I18N.deviceContent?.[locale]?.[recId];

  if (!baseContent) {
    return localizedContent || null;
  }

  if (!localizedContent) {
    return baseContent;
  }

  return {
    ...baseContent,
    ...localizedContent,
    whyConditional: {
      ...(baseContent.whyConditional || {}),
      ...(localizedContent.whyConditional || {})
    },
    considerConditional: {
      ...(baseContent.considerConditional || {}),
      ...(localizedContent.considerConditional || {})
    },
    considerBase: localizedContent.considerBase || baseContent.considerBase,
    nextSteps: localizedContent.nextSteps || baseContent.nextSteps
  };
}

function getWhyBase(recId) {
  return getDeviceContent(recId)?.whyBase || "";
}

const WHY_CONDITIONAL_KEY_MAP = {
  transitLink: ["transitLinkYes"],
  children: ["carryChildrenYes"],
  under3: ["distanceUnder3"],
  longDistance: ["distance3to9", "distance10plus"],
  bikeLanes: ["routeBikeLanes"],
  mixedRoads: ["routeMixedRoads"],
  regularRoads: ["routeRegularRoads"],
  trails: ["routeTrails"],
  storage: ["storageOutdoor"]
};

function getWhyConditional(recId, key) {
  const whyConditional = getDeviceContent(recId)?.whyConditional || {};

  if (whyConditional[key]) {
    return whyConditional[key];
  }

  const mappedKeys = WHY_CONDITIONAL_KEY_MAP[key] || [];
  return mappedKeys.map((mappedKey) => whyConditional[mappedKey] || "").find(Boolean) || "";
}

function getConsiderBase(recId) {
  return [...(getDeviceContent(recId)?.considerBase || [])];
}

const CONSIDER_CONDITIONAL_KEY_MAP = {
  transitLink: ["transitLinkYes"],
  children: ["carryChildrenYes"],
  indoorStorage: ["storageIndoor"],
  outdoorStorage: ["storageOutdoor"],
  age14to16: ["age14to16"],
  adaptiveChild: ["adaptiveNeedYes"],
  youthGuidance: ["age3to13"],
  ohv: ["transport"],
  classes: ["age17to49", "age50plus"],
  childWhyBase: ["adaptiveNeedYes"]
};

function getConsiderConditionalValue(recId, key) {
  const considerConditional = getDeviceContent(recId)?.considerConditional || {};

  if (considerConditional[key]) {
    return considerConditional[key];
  }

  const mappedKeys = CONSIDER_CONDITIONAL_KEY_MAP[key] || [];
  return mappedKeys
    .map((mappedKey) => considerConditional[mappedKey] || "")
    .find(Boolean) || "";
}

function getNextSteps(recId) {
  return [...(getDeviceContent(recId)?.nextSteps || [])];
}

const QUESTIONS = {
  pathway: {
    type: "radio",
    label: "Who are you purchasing for?",
    options: [
      { value: "myself", label: "Myself" },
      { value: "someoneElse", label: "Someone else" },
      { value: "child", label: "A child" },
      { value: "exploring", label: "Explore all device options" }
    ]
  },
  ageInput: {
    type: "number",
    label: "How old is the rider?",
    min: 3,
    max: 100
  },
  adaptiveNeed: {
    type: "radio",
    label: "Does the rider have a mobility disability or mobility need?",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" }
    ]
  },
  primaryUse: {
    type: "radio",
    label: "What will the device mostly be used for?",
    options: [
      { value: "transport", label: "Getting to work, school, or errands" },
      { value: "deliveries", label: "Deliveries or work" },
      { value: "recreation", label: "Recreation or exercise" }
    ]
  },
  transitLink: {
  type: "radio",
  label: "Will this trip include public transit?",
  options: [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" }
  ]
},
  carryChildren: {
    type: "radio",
    label: "Does the rider plan to carry children with the device?",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" }
    ]
  },
  distance: {
    type: "radio",
    label: "What is the rider’s typical trip distance?",
    options: [
      { value: "under3", label: "Under 3 miles" },
      { value: "3to9", label: "3–9 miles" },
      { value: "10plus", label: "10+ miles" }
    ]
  },
  routeType: {
    type: "radio",
    label: "What is your typical route like?",
    options: [
      { value: "bikeLanes", label: "Bike lanes separated from cars" },
      { value: "mixedRoads", label: "Some bike lanes but without separation from cars" },
      { value: "regularRoads", label: "Roads without separation from cars" },
      { value: "trails", label: "Mostly on trails, paths, or in parks" }
    ]
  },
  storage: {
    type: "radio",
    label: "How will this device usually be stored?",
    options: [
      { value: "indoor", label: "It needs to be easy to bring inside" },
      { value: "outdoor", label: "It will usually be stored outside" },
      { value: "notMajorConcern", label: "Storage location is flexible" }
    ]
  }
};

const ROUTE_OPTION_MEDIA = {
  bikeLanes: {
    src: "route-bikeLanes-square.jpg",
    alt: "Bike lane separated from cars"
  },
  mixedRoads: {
    src: "route-mixedRoads-square.jpg",
    alt: "Bike lane next to busier traffic"
  },
  regularRoads: {
    src: "route-regularRoads-square.jpg",
    alt: "Road next to cars without separated bike space"
  },
  trails: {
    src: "route-trails-square.jpg",
    alt: "Trail or park path for biking"
  }
};

const APP_STATE = {
  currentStep: 0,
  answers: {},
  locale: "en",
  currentResultIndex: 0,
  allResultsPanelOpen: false,
  resultsMethodologyOpen: false,
  currentRecommendations: [],
  currentAllRecommendations: [],
  currentNormalizedAnswers: null,
  currentScores: null,
  currentPathway: null
};

const I18N = window.MICROMOBILITY_TRANSLATIONS || {};

const BIKE_SHOP_URL = "https://nbda.com/dealer-finder-member-directory/#!directory/map/tag=Massachusetts";
const PINKBIKE_URL = "https://www.pinkbike.com/directory/list/massachusetts/2/bike-shop/";
const SINGLETRACKS_URL = "https://www.singletracks.com/bike-shops/region/massachusetts/";

function getCurrentLocale() {
  return APP_STATE.locale === "es" ? "es" : "en";
}

function isSpanishLocale() {
  return getCurrentLocale() === "es";
}

function getUiText(key) {
  const locale = getCurrentLocale();
  return I18N.ui?.[locale]?.[key] || "";
}

function getOutputStrings(outputId) {
  const locale = getCurrentLocale();
  return I18N.outputs?.[locale]?.[outputId] || OUTPUTS[outputId] || { label: outputId, shortLabel: outputId };
}

function getOutputLabel(outputId) {
  return getOutputStrings(outputId).label;
}

function getQuestionLocaleCopy(questionId) {
  const locale = getCurrentLocale();
  return I18N.questions?.[locale]?.[questionId] || {};
}

function getLocalizedQuestion(questionId) {
  const baseQuestion = QUESTIONS[questionId];
  if (!baseQuestion) return null;

  const localeCopy = getQuestionLocaleCopy(questionId);

  return {
    ...baseQuestion,
    label: localeCopy.label || baseQuestion.label,
    options: (baseQuestion.options || []).map((option) => ({
      ...option,
      label: localeCopy.options?.[option.value] || option.label
    }))
  };
}

function getPathwayQuestionLabelSet(pathway) {
  if (!isSpanishLocale()) {
    return null;
  }

  return I18N.pathwayQuestionLabels?.es?.[pathway] || null;
}

function getRouteOptionAlt(optionValue) {
  const locale = getCurrentLocale();
  return I18N.routeAlt?.[locale]?.[optionValue] || ROUTE_OPTION_MEDIA[optionValue]?.alt || "";
}

function getRecommendationImageAltMap(recId) {
  const locale = getCurrentLocale();
  return I18N.recommendationImageAlt?.[locale]?.[recId] || RECOMMENDATION_IMAGE_ALT_TEXT[recId] || getOutputLabel(recId);
}

function getExploreReasonText(recId) {
  const locale = getCurrentLocale();
  return I18N.exploreReasons?.[locale]?.[recId] || EXPLORE_REASON_TEXT[recId] || "";
}

function getAgeReferenceText(pathway) {
  if (isSpanishLocale()) {
    if (pathway === "myself") return "tu edad";
    if (pathway === "child") return "la edad del niño o la niña";
    return "la edad de quien lo usará";
  }

  if (pathway === "myself") return "your age";
  if (pathway === "child") return "the child's age";
  return "the rider's age";
}

function getDynamicCountLabel(current, total) {
  if (isSpanishLocale()) {
    return `${current} ${getUiText("countOf")} ${total}`;
  }

  return `${current} of ${total}`;
}

function getSequenceLengthForAnswers(rawAnswers) {
  const pathway = rawAnswers.pathway || "myself";
  const visibleKeys = getVisibleQuestionKeys(rawAnswers);

  if (pathway === "child") {
    return visibleKeys.filter((key) => key !== "carryChildren").length;
  }

  return visibleKeys.length;
}

function getPossibleQuestionTotals(rawAnswers = APP_STATE.answers) {
  if (rawAnswers.pathway === "exploring") {
    return { min: 1, max: 1 };
  }

  const candidatePathways = rawAnswers.pathway
    ? [rawAnswers.pathway]
    : ["myself", "someoneElse", "child"];
  const candidatePrimaryUses = rawAnswers.primaryUse
    ? [rawAnswers.primaryUse]
    : ["transport", "recreation"];
  const lengths = [];

  candidatePathways.forEach((pathway) => {
    candidatePrimaryUses.forEach((primaryUse) => {
      lengths.push(
        getSequenceLengthForAnswers({
          ...rawAnswers,
          pathway,
          primaryUse
        })
      );
    });
  });

  return {
    min: Math.min(...lengths),
    max: Math.max(...lengths)
  };
}

function getQuestionProgressText(questionId) {
  const currentNumber = findQuestionIndex(questionId) + 1;
  const { min, max } = getPossibleQuestionTotals(APP_STATE.answers);
  const questionLabel = isSpanishLocale() ? "Pregunta" : "Question";
  const ofLabel = isSpanishLocale() ? getUiText("countOf") : "of";

  if (min === max) {
    return `${questionLabel} ${currentNumber} ${ofLabel} ${max}`;
  }

  const totalRange = isSpanishLocale() ? `${min} a ${max}` : `${min}-${max}`;
  return `${questionLabel} ${currentNumber} ${ofLabel} ${totalRange}`;
}

function setQuestionContext(questionId) {
  const progress = document.getElementById("progress");
  const currentContent = getRenderedQuestionLabel(questionId);
  const progressText = getQuestionProgressText(questionId);
  const appTitle = isSpanishLocale() ? getUiText("title") : APP_NAME;

  document.title = `${appTitle} - ${progressText} - ${currentContent}`;

  if (progress) {
    progress.textContent = progressText;
  }
}

function setResultsContext(recLabel = "") {
  const progress = document.getElementById("progress");
  const appTitle = isSpanishLocale() ? getUiText("title") : APP_NAME;
  const resultsLabel = isSpanishLocale() ? "Resultados" : "Results";

  document.title = recLabel
    ? `${appTitle} - ${resultsLabel} - ${recLabel}`
    : `${appTitle} - ${resultsLabel}`;

  if (progress) {
    progress.textContent = resultsLabel;
  }
}

function getQuestionNextButtonLabel(questionId) {
  const nextQuestionId = getAdjacentQuestionId(questionId, 1);

  if (!nextQuestionId) {
    return isSpanishLocale() ? "Resultados" : "Results";
  }

  return isSpanishLocale() ? getUiText("nextQuestion") : "Next question";
}

function renderLocaleChrome() {
  const documentTitle = document.getElementById("documentTitle");
  const languageToggle = document.getElementById("languageToggle");
  const footerGuide = document.getElementById("footerGuide");
  const footerNote = document.getElementById("footerNote");
  const labLogo = document.getElementById("labLogo");
  const backBtn = document.getElementById("backBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (documentTitle) {
    documentTitle.textContent = isSpanishLocale() ? getUiText("title") : APP_NAME;
  }

  if (languageToggle) {
    languageToggle.setAttribute(
      "aria-label",
      isSpanishLocale() ? getUiText("languageToggleLabel") : "Language toggle"
    );
  }

  if (footerGuide) {
    footerGuide.textContent = isSpanishLocale()
      ? getUiText("footerGuide")
      : APP_NAME;
  }

  if (footerNote) {
    footerNote.textContent = isSpanishLocale()
      ? getUiText("footerNote")
      : "Built by The Lab @ MassDOT";
  }

  if (labLogo) {
    labLogo.alt = isSpanishLocale()
      ? getUiText("labLogoAlt")
      : "The Lab at MassDOT logo";
  }

  if (backBtn) {
    backBtn.setAttribute(
      "aria-label",
      isSpanishLocale() ? getUiText("previousQuestion") : "Previous question"
    );
  }

  if (nextBtn) {
    nextBtn.setAttribute(
      "aria-label",
      getQuestionNextButtonLabel(getCurrentQuestionId())
    );
  }
}

const DEBUG_MODE = false;

function printCurrentResponseScores(answers, scores, sortedRecommendations) {
  if (!DEBUG_MODE) {
    return;
  }

  const deviceOrder = [
    "bicycle",
    "ebike",
    "escooter",
    "lowSpeedPoweredMicromobility",
    "cargoBike",
    "adaptiveMobility",
    "bikeshare",
    "humanPoweredYouth"
  ];

  const pathway = answers.pathway || "myself";
  const questionRows = getPrintableQuestionKeys(APP_STATE.answers || {})
    .map((questionId) => ({
      question: getQuestionLabelForPathway(questionId, pathway),
      answer: getAnswerDisplayValue(questionId, APP_STATE.answers?.[questionId] || "")
    }))
    .filter((row) => row.answer);

  console.groupCollapsed("Current response questions and answers");
  console.table(questionRows);
  console.groupEnd();

  console.groupCollapsed("Current response normalized answers");
  console.table(answers);
  console.groupEnd();

  console.groupCollapsed("Current response scores by device");
  console.table(
    deviceOrder
      .filter((device) => scores[device] !== undefined)
      .map((device) => ({
        device,
        score: scores[device]
      }))
  );
  console.groupEnd();

  console.groupCollapsed("Current sorted recommendations");
  console.table(
    sortedRecommendations.map((rec, index) => ({
      rank: index + 1,
      device: rec.id,
      score: rec.score
    }))
  );
  console.groupEnd();
}

function getSelectedPathway() {
  return APP_STATE.answers.pathway || "myself";
}

function getCurrentSequence() {
  const pathway = getSelectedPathway();
  const visibleKeys = getVisibleQuestionKeys(APP_STATE.answers);

  if (pathway === "myself" || pathway === "someoneElse" || pathway === "exploring") {
    return visibleKeys;
  }

  if (pathway === "child") {
    return visibleKeys.filter((key) => key !== "carryChildren");
  }

  return visibleKeys;
}

function getCurrentQuestionId() {
  const sequence = getCurrentSequence();
  return sequence[APP_STATE.currentStep];
}

function findQuestionIndex(questionId) {
  return getCurrentSequence().indexOf(questionId);
}

function setCurrentStepToQuestion(questionId) {
  const questionIndex = findQuestionIndex(questionId);
  if (questionIndex === -1) return false;

  APP_STATE.currentStep = questionIndex;
  return true;
}

function getAdjacentQuestionId(questionId, direction) {
  const sequence = getCurrentSequence();
  const currentIndex = sequence.indexOf(questionId);
  if (currentIndex === -1) return "";

  return sequence[currentIndex + direction] || "";
}

function mapAgeToBracket(ageValue) {
  const age = Number(ageValue);

  if (!Number.isFinite(age) || age < 3) return "";
  if (age >= 3 && age < 14) return "age3to13";
  if (age >= 14 && age <= 16) return "age14to16";
  if (age >= 50) return "age50plus";
  return "age17to49";
}

function initializeScores() {
  return {
    bicycle: 0,
    ebike: 0,
    escooter: 0,
    lowSpeedPoweredMicromobility: 0,
    cargoBike: 0,
    bikeshare: 0,
    adaptiveMobility: 0,
    humanPoweredYouth: 0
  };
}

function addScores(scores, ruleSet) {
  Object.entries(ruleSet).forEach(([outputId, points]) => {
    if (scores[outputId] !== undefined) {
      scores[outputId] += points;
    }
  });
}

function applyOverrides(scores, answers) {
  const adjusted = { ...scores };

  if (answers.pathway === "exploring") {
    return adjusted;
  }

  if (answers.age === "age3to13") {
    adjusted.bicycle = Number.NEGATIVE_INFINITY;
    adjusted.ebike = Number.NEGATIVE_INFINITY;
    adjusted.escooter = Number.NEGATIVE_INFINITY;
    adjusted.lowSpeedPoweredMicromobility = Number.NEGATIVE_INFINITY;
    adjusted.cargoBike = Number.NEGATIVE_INFINITY;
    adjusted.bikeshare = Number.NEGATIVE_INFINITY;
    adjusted.humanPoweredYouth = 999;

    if (answers.adaptiveNeed === "yes") {
      adjusted.adaptiveMobility = 1000;
      return adjusted;
    }

    adjusted.adaptiveMobility = Number.NEGATIVE_INFINITY;
    return adjusted;
  }

  if (answers.age === "age14to16") {
    adjusted.escooter = Number.NEGATIVE_INFINITY;
    adjusted.lowSpeedPoweredMicromobility = Number.NEGATIVE_INFINITY;
    adjusted.bikeshare = Number.NEGATIVE_INFINITY;
  }

  if (answers.age === "age50plus") {
    adjusted.escooter = Number.NEGATIVE_INFINITY;
    adjusted.lowSpeedPoweredMicromobility = Number.NEGATIVE_INFINITY;
  }

  if (answers.carryChildren === "yes") {
    adjusted.escooter = Number.NEGATIVE_INFINITY;
    adjusted.lowSpeedPoweredMicromobility = Number.NEGATIVE_INFINITY;
  }

  if (answers.routeType === "regularRoads" || answers.routeType === "trails") {
    adjusted.escooter = Number.NEGATIVE_INFINITY;
  }

  if (
    answers.routeType !== "bikeLanes" &&
    answers.routeType !== "trails"
  ) {
    adjusted.lowSpeedPoweredMicromobility = Number.NEGATIVE_INFINITY;
  }

  if (answers.distance !== "under3") {
    adjusted.lowSpeedPoweredMicromobility = Number.NEGATIVE_INFINITY;
  }

  if (answers.storage !== "indoor") {
    adjusted.lowSpeedPoweredMicromobility = Number.NEGATIVE_INFINITY;
  }

  if (answers.storage === "indoor") {
    adjusted.cargoBike -= 1;
  }

  return adjusted;
}

function enforceCargoBikePlacement(sortedDevices, answers) {
  if (answers.carryChildren !== "yes") return sortedDevices;

  const cargoIndex = sortedDevices.findIndex((d) => d.id === "cargoBike");

  if (cargoIndex === -1 || cargoIndex <= 1) return sortedDevices;

  const cargo = sortedDevices.splice(cargoIndex, 1)[0];
  sortedDevices.splice(1, 0, cargo);

  return sortedDevices;
}

function enforceAdaptiveMobilityPlacement(sortedDevices, answers) {
  if (answers.adaptiveNeed !== "yes") return sortedDevices;

  const adaptiveIndex = sortedDevices.findIndex((d) => d.id === "adaptiveMobility");

  if (adaptiveIndex === -1) return sortedDevices;

  const adaptive = sortedDevices.splice(adaptiveIndex, 1)[0];
  sortedDevices.unshift(adaptive);

  return sortedDevices;
}

function normalizeAnswers(rawAnswers) {
  const pathway = rawAnswers.pathway || "myself";

  return {
    pathway,
    ageInput: rawAnswers.ageInput || "",
    age: mapAgeToBracket(rawAnswers.ageInput),
    adaptiveNeed:
      pathway === "myself" || pathway === "someoneElse" || pathway === "child"
        ? (rawAnswers.adaptiveNeed || "no")
        : "no",
    primaryUse: rawAnswers.primaryUse || "",
    transitLink: rawAnswers.transitLink || "",
    carryChildren: pathway === "myself" || pathway === "someoneElse" || pathway === "exploring"
      ? (rawAnswers.carryChildren || "")
      : "no",
    distance: rawAnswers.distance || "",
    routeType: rawAnswers.routeType || "",
    storage: rawAnswers.storage || ""
  };
}

function calculateScores(answers) {
  const scores = initializeScores();

  Object.keys(answers).forEach((questionKey) => {
    const answerId = answers[questionKey];
    const questionRules = SCORING_RULES[questionKey];

    if (questionRules && questionRules[answerId]) {
      addScores(scores, questionRules[answerId]);
    }
  });

  return applyOverrides(scores, answers);
}

function getSortedRecommendations(scores, answers) {
  let sortedDevices = Object.entries(scores)
    .filter(([, score]) => Number.isFinite(score))
    .map(([id, score]) => ({
      id,
      label: getOutputLabel(id),
      score
    }))
    .sort((a, b) => b.score - a.score);

  sortedDevices = enforceCargoBikePlacement(sortedDevices, answers);
  sortedDevices = enforceAdaptiveMobilityPlacement(sortedDevices, answers);

  return sortedDevices;
}

function getTopRecommendations(sortedDevices) {
  return sortedDevices.slice(0, 2);
}

function getRecommendationPriorityMeta(index, score, topScore, recId, answers) {
  if (recId === "bikeshare" && answers?.carryChildren === "yes") {
    return {
      label: isSpanishLocale() ? getUiText("notSuggested") : "Shown lower",
      className: "all-results-tag-not"
    };
  }

  if (score >= topScore - 1) {
    return {
      label: isSpanishLocale() ? getUiText("alsoSuggested") : "Also shown",
      className: "all-results-tag-suggested"
    };
  }

  return {
    label: isSpanishLocale() ? getUiText("notSuggested") : "Shown lower",
    className: "all-results-tag-not"
  };
}

function getAllResultsImage(recId, answers) {
  const content = getDeviceContent(recId);
  if (!content) return "";

  return getRecommendationImage(recId, answers, content);
}

function getQuestionLabelForPathway(questionId, pathway) {
  const localizedPathwayLabels = getPathwayQuestionLabelSet(pathway);
  if (localizedPathwayLabels?.[questionId]) {
    return localizedPathwayLabels[questionId];
  }

  if (pathway === "myself") {
    const myselfLabels = {
      ageInput: "How old are you?",
      adaptiveNeed: "Do you have a mobility disability or mobility need?",
      primaryUse: "What will you mostly use the device for?",
      transitLink: "Will your trip include public transit?",
      carryChildren: "Do you plan to carry children with the device?",
      distance: "What is your typical trip distance?",
      routeType: "What kind of route will your trip mostly be?",
      storage: "How will your device usually be stored?"
    };

    return myselfLabels[questionId] || getLocalizedQuestion(questionId)?.label || questionId;
  }

  if (pathway === "someoneElse" || pathway === "exploring") {
    const riderLabels = {
      ageInput: "How old is the rider?",
      adaptiveNeed: "Does the rider have a mobility disability or mobility need?",
      primaryUse: "What will the rider mostly use the device for?",
      transitLink: "Will the rider's trip include public transit?",
      carryChildren: "Does the rider plan to carry children with the device?",
      distance: "What is the rider's typical trip distance?",
      routeType: "What kind of route will the rider's trip mostly be?",
      storage: "How will the rider's device usually be stored?"
    };

    return riderLabels[questionId] || getLocalizedQuestion(questionId)?.label || questionId;
  }

  if (pathway === "child") {
    const childLabels = {
      ageInput: "How old is the child?",
      adaptiveNeed: "Does the child have a mobility disability or mobility need?",
      primaryUse: "What will the child mostly use the device for?",
      transitLink: "Will the child's trip include public transit?",
      distance: "What is the child's typical trip distance?",
      routeType: "What kind of route will the child's trip mostly be?",
      storage: "How will the child's device usually be stored?"
    };

    return childLabels[questionId] || getLocalizedQuestion(questionId)?.label || questionId;
  }

  return getLocalizedQuestion(questionId)?.label || questionId;
}

function getAnswerDisplayValue(questionId, value) {
  if (value === undefined || value === null || value === "") return "";

  if (questionId === "ageInput") {
    return String(value);
  }

  const options = getLocalizedQuestion(questionId)?.options || [];
  return options.find((option) => option.value === value)?.label || String(value);
}

function getPrintableQuestionKeys(rawAnswers) {
  const pathway = rawAnswers.pathway || "myself";
  const visibleKeys = getVisibleQuestionKeys(rawAnswers);

  if (pathway === "child") {
    return visibleKeys.filter((key) => key !== "carryChildren");
  }

  return visibleKeys;
}

function renderPrintInputsSummary(rawAnswers) {
  const pathway = rawAnswers.pathway || "myself";
  const itemsHtml = getPrintableQuestionKeys(rawAnswers)
    .map((questionId) => {
      const label = getQuestionLabelForPathway(questionId, pathway);
      const value = getAnswerDisplayValue(questionId, rawAnswers[questionId]);

      if (!value) return "";

      return `
        <div class="print-input-item">
          <dt>${label}</dt>
          <dd>${value}</dd>
        </div>
      `;
    })
    .join("");

  return `
    <section class="print-section">
      <h3 class="print-section-heading">${isSpanishLocale() ? getUiText("yourResponses") : "Your responses"}</h3>
      <dl class="print-input-list">${itemsHtml}</dl>
    </section>
  `;
}

function getAllResultsPositiveFactor(recId, answers) {
  if (!answers) return "";

  if (isSpanishLocale()) {
    switch (recId) {
      case "bicycle":
        if (answers.transitLink === "yes") {
          return "todavía encaja razonablemente bien en un viaje que incluye transporte público";
        }
        if (answers.carryChildren === "yes") {
          return "puede servir para llevar niños con los accesorios adecuados";
        }
        if (answers.primaryUse === "recreation" || answers.routeType === "trails") {
          return "encaja bien con el tipo de recorrido que se describió";
        }
        if (answers.distance === "under3" || answers.distance === "3to9") {
          return "es una opción versátil para los viajes diarios y los trayectos cortos";
        }
        return "es una opción versátil para los viajes diarios";

      case "ebike":
        if (answers.distance === "10plus" || answers.distance === "3to9") {
          return "la asistencia eléctrica encaja bien con la distancia del viaje";
        }
        if (answers.routeType === "regularRoads") {
          return "responde mejor en recorridos largos o en calles más exigentes que los dispositivos más livianos";
        }
        if (answers.carryChildren === "yes") {
          return "algunos modelos pueden servir para llevar niños o carga extra";
        }
        if (answers.transitLink === "yes") {
          return "todavía puede apoyar un viaje que incluye transporte público si hace falta";
        }
        return "reduce el esfuerzo físico en los viajes diarios";

      case "escooter":
        if (answers.transitLink === "yes") {
          return "su tamaño plegable puede funcionar bien con una conexión al transporte público";
        }
        if (answers.distance === "under3" && answers.routeType === "bikeLanes") {
          return "la distancia corta del viaje y la ruta de menor estrés encajan bien con esta opción";
        }
        if (answers.storage === "indoor") {
          return "su tamaño compacto hace más fácil guardarlo adentro";
        }
        return "resulta práctico para viajes cortos en rutas más lisas";

      case "lowSpeedPoweredMicromobility":
        if (answers.distance === "under3" && answers.storage === "indoor") {
          return "el viaje corto y la necesidad de guardarlo adentro encajan bien con estos dispositivos compactos";
        }
        if (answers.routeType === "bikeLanes" || answers.routeType === "trails") {
          return "estos dispositivos funcionan mejor en el tipo de ruta de menor estrés que se seleccionó";
        }
        if (answers.transitLink === "yes") {
          return "su portabilidad ayuda cuando el transporte público forma parte del viaje";
        }
        return "su tamaño compacto puede hacer que los trayectos cortos se sientan simples y flexibles";

      case "cargoBike":
        if (answers.carryChildren === "yes") {
          return "su mayor capacidad de carga encaja con la necesidad de llevar niños";
        }
        if (answers.primaryUse === "deliveries") {
          return "su capacidad de carga funciona bien para entregas o cargas pesadas";
        }
        if (answers.primaryUse === "transport") {
          return "resuelve mandados, compras y carga cotidiana mejor que la mayoría de los dispositivos";
        }
        return "ofrece mucha más capacidad de carga que una bicicleta tradicional";

      case "bikeshare":
        if (answers.storage === "outdoor") {
          return "no hace falta guardar un dispositivo en casa";
        }
        if (answers.transitLink === "yes") {
          return "funcionan bien para conexiones con transporte público y viajes de ida";
        }
        if (answers.primaryUse === "transport") {
          return "resultan útiles para viajes diarios sin comprometerse a tener un dispositivo propio";
        }
        return "resultan útiles cuando la flexibilidad importa más que tener un dispositivo propio";

      case "adaptiveMobility":
        if (answers.adaptiveNeed === "yes") {
          return "suele ofrecer más apoyo para la movilidad que la mayoría de los otros tipos de dispositivos";
        }
        if (answers.primaryUse === "recreation") {
          return "puede ofrecer una posición más estable y cómoda para circular";
        }
        if (answers.primaryUse === "transport") {
          return "puede ser una opción de transporte estable con la configuración adecuada";
        }
        return "puede ofrecer más estabilidad y comodidad que los dispositivos estándar de dos ruedas";

      case "humanPoweredYouth":
        if (answers.distance === "under3") {
          return `${getAgeReferenceText(answers.pathway)} y la distancia corta del viaje apuntan a opciones no motorizadas adecuadas para esta etapa`;
        }
        return `${getAgeReferenceText(answers.pathway)} apunta a opciones no motorizadas adecuadas para esta etapa`;

      default:
        return "coincide con parte del perfil de viaje que se describió";
    }
  }

  switch (recId) {
    case "bicycle":
      if (answers.transitLink === "yes") {
        return "it can still work reasonably well with a transit-linked trip";
      }
      if (answers.carryChildren === "yes") {
        return "it can support carrying children with the right add-ons";
      }
      if (answers.primaryUse === "recreation" || answers.routeType === "trails") {
        return "it fits well with the kind of riding you described";
      }
      if (answers.distance === "under3" || answers.distance === "3to9") {
        return "it is a versatile fit for everyday riding and shorter trips";
      }
      return "it is a versatile fit for everyday riding";

    case "ebike":
      if (answers.distance === "10plus" || answers.distance === "3to9") {
        return "the electric assist is a strong match for your trip distance";
      }
      if (answers.routeType === "regularRoads") {
        return "it can handle longer or more demanding road riding better than lighter devices";
      }
      if (answers.carryChildren === "yes") {
        return "some models can support carrying children or extra cargo";
      }
      if (answers.transitLink === "yes") {
        return "it can still support a transit-linked trip if needed";
      }
      return "it reduces physical effort on everyday trips";

    case "escooter":
      if (answers.transitLink === "yes") {
        return "its foldable size can work well with a transit connection";
      }
      if (answers.distance === "under3" && answers.routeType === "bikeLanes") {
        return "your shorter trip and lower-stress route are a good match for it";
      }
      if (answers.storage === "indoor") {
        return "its compact size makes indoor storage easier";
      }
      return "it can be practical for short trips on smoother routes";

    case "lowSpeedPoweredMicromobility":
      if (answers.distance === "under3" && answers.storage === "indoor") {
        return "your short trip and indoor storage needs line up well with these compact devices";
      }
      if (answers.routeType === "bikeLanes" || answers.routeType === "trails") {
        return "these devices work best on the kind of lower-stress route you selected";
      }
      if (answers.transitLink === "yes") {
        return "their portability can help if transit is part of the trip";
      }
      return "their compact size can make short trips feel simple and flexible";

    case "cargoBike":
      if (answers.carryChildren === "yes") {
        return "its added carrying capacity matches your need to bring children";
      }
      if (answers.primaryUse === "deliveries") {
        return "its larger capacity is well suited to deliveries or heavier loads";
      }
      if (answers.primaryUse === "transport") {
        return "it can handle errands, groceries, and everyday hauling better than most devices";
      }
      return "it offers much more carrying capacity than a standard bike";

    case "bikeshare":
      if (answers.storage === "outdoor") {
        return "you do not need to store a device at home";
      }
      if (answers.transitLink === "yes") {
        return "it can work well for transit connections and one-way trips";
      }
      if (answers.primaryUse === "transport") {
        return "it can be useful for everyday trips without committing to ownership";
      }
      return "it can be useful if flexibility matters more than ownership";

    case "adaptiveMobility":
      if (answers.adaptiveNeed === "yes") {
        return "it is better suited to support mobility needs than most other device types";
      }
      if (answers.primaryUse === "recreation") {
        return "it can offer a more stable and comfortable riding position";
      }
      if (answers.primaryUse === "transport") {
        return "it can be a stable transportation option with the right setup";
      }
      return "it can offer added stability and comfort compared with standard two-wheel devices";

    case "humanPoweredYouth":
      if (answers.distance === "under3") {
        return `${getAgeReferenceText(answers.pathway)} and the shorter trip distance point toward age-appropriate nonmotorized options`;
      }
      return `${getAgeReferenceText(answers.pathway)} points toward age-appropriate nonmotorized options`;

    default:
      return "it matches part of the trip profile you described";
  }
}

function getAllResultsCautionFactor(recId, answers) {
  if (!answers) return "";

  if (isSpanishLocale()) {
    switch (recId) {
      case "bicycle":
        if (answers.primaryUse === "deliveries") {
          return "los viajes de trabajo o entrega más exigentes suelen ser más fáciles con más capacidad de carga o asistencia eléctrica";
        }
        if (answers.carryChildren === "yes") {
          return "llevar niños suele ser más fácil en una bicicleta de carga o en una bicicleta eléctrica pensada para eso";
        }
        if (answers.distance === "10plus") {
          return "las distancias más largas pueden requerir más esfuerzo sin asistencia eléctrica";
        }
        if (answers.routeType === "regularRoads") {
          return "las calles sin separación del tráfico pueden sentirse más exigentes que las rutas de menor estrés";
        }
        return "requiere más esfuerzo físico que las opciones eléctricas";

      case "ebike":
        if (answers.age === "age14to16") {
          return `${getAgeReferenceText(answers.pathway)} reduce las opciones apropiadas a modelos de Clase 1`;
        }
        if (answers.transitLink === "yes") {
          return "su peso puede hacer que las conexiones con el transporte público sean menos prácticas que con dispositivos plegables más pequeños";
        }
        if (answers.storage === "indoor") {
          return "la carga en interiores y la seguridad de la batería requieren más planificación";
        }
        return "cuesta más y requiere más mantenimiento que una bicicleta tradicional";

      case "escooter":
        if (answers.routeType === "regularRoads" || answers.routeType === "mixedRoads") {
          return "se siente menos cómodo en calles más irregulares o con más tráfico";
        }
        if (answers.distance === "10plus") {
          return "es menos ideal para viajes largos donde importan más la comodidad y la autonomía";
        }
        if (answers.carryChildren === "yes") {
          return "no está diseñado para llevar niños";
        }
        return "sus ruedas pequeñas y la posición de pie limitan la comodidad en superficies más irregulares";

      case "lowSpeedPoweredMicromobility":
        if (answers.routeType !== "bikeLanes" && answers.routeType !== "trails") {
          return "estos dispositivos funcionan mejor en rutas más lisas y de menor estrés";
        }
        if (answers.distance === "3to9" || answers.distance === "10plus") {
          return "suelen ser una opción más débil cuando los viajes se vuelven más largos";
        }
        if (answers.storage !== "indoor") {
          return "tienen más sentido cuando pueden guardarse adentro con facilidad";
        }
        return "suelen ser menos versátiles que las bicicletas para los viajes cotidianos";

      case "cargoBike":
        if (answers.transitLink === "yes") {
          return "su tamaño más pesado y voluminoso dificulta las conexiones con el transporte público";
        }
        if (answers.storage === "indoor") {
          return "su tamaño más grande puede hacer más difícil guardarla adentro";
        }
        if (answers.distance === "10plus") {
          return "los viajes largos suelen ser más fáciles en un modelo eléctrico de carga que en uno sin asistencia";
        }
        return "su tamaño y peso la hacen más aparatosa que las opciones más simples";

      case "bikeshare":
        if (answers.adaptiveNeed === "yes") {
          return "las bicicletas compartidas se adaptan menos a necesidades de apoyo para la movilidad";
        }
        if (answers.carryChildren === "yes") {
          return "las bicicletas públicas compartidas no suelen ser una opción práctica para llevar niños";
        }
        if (answers.distance === "10plus") {
          return "pueden ser menos prácticas si se necesitan viajes largos con regularidad";
        }
        return "dependen de la disponibilidad de estaciones y pueden ser menos confiables que tener un dispositivo propio";

      case "adaptiveMobility":
        if (answers.storage === "indoor") {
          return "algunos modelos pueden ser más grandes y difíciles de guardar adentro";
        }
        if (answers.transitLink === "yes") {
          return "el tamaño y el peso varían mucho, así que algunos modelos son más difíciles de combinar con el transporte público";
        }
        if (answers.adaptiveNeed !== "yes") {
          return "puede ser una opción más especializada y costosa de lo necesario";
        }
        return "la mejor opción depende mucho del tipo de apoyo que se necesite";

      case "humanPoweredYouth":
        if (answers.distance === "10plus" || answers.transitLink === "yes") {
          return "los viajes largos o con conexión al transporte público pueden ir más allá de lo que estas opciones sencillas hacen mejor";
        }
        return "ofrecen menos velocidad y alcance que las opciones motorizadas más grandes";

      default:
        return "es una opción menos directa que algunas de las que quedaron mejor ubicadas";
    }
  }

  switch (recId) {
    case "bicycle":
      if (answers.primaryUse === "deliveries") {
        return "heavier work or delivery trips may be easier with cargo capacity or electric assist";
      }
      if (answers.carryChildren === "yes") {
        return "carrying children is usually easier on a cargo bike or an e-bike built for that purpose";
      }
      if (answers.distance === "10plus") {
        return "longer distances may take more effort without electric assist";
      }
      if (answers.routeType === "regularRoads") {
        return "roads without separation from cars may feel more demanding than lower-stress routes";
      }
      return "it relies more on physical effort than electric options";

    case "ebike":
      if (answers.age === "age14to16") {
        return `${getAgeReferenceText(answers.pathway)} narrows the appropriate options to Class 1 models`;
      }
      if (answers.transitLink === "yes") {
        return "its weight can make transit connections less convenient than smaller foldable devices";
      }
      if (answers.storage === "indoor") {
        return "indoor charging and battery safety need more planning";
      }
      return "it costs more and needs more upkeep than a standard bicycle";

    case "escooter":
      if (answers.routeType === "regularRoads" || answers.routeType === "mixedRoads") {
        return "it is less comfortable on rougher roads or around heavier traffic";
      }
      if (answers.distance === "10plus") {
        return "it is less ideal for longer trips where comfort and range matter more";
      }
      if (answers.carryChildren === "yes") {
        return "it is not designed for carrying children";
      }
      return "its small wheels and standing position limit comfort on rougher surfaces";

    case "lowSpeedPoweredMicromobility":
      if (answers.routeType !== "bikeLanes" && answers.routeType !== "trails") {
        return "these devices work best on smoother, lower-stress routes";
      }
      if (answers.distance === "3to9" || answers.distance === "10plus") {
        return "they are usually a weaker fit once trips get longer";
      }
      if (answers.storage !== "indoor") {
        return "they make the most sense when they can be brought inside easily";
      }
      return "they are usually less versatile than bikes for everyday travel";

    case "cargoBike":
      if (answers.transitLink === "yes") {
        return "its heavier and bulkier size makes transit connections harder";
      }
      if (answers.storage === "indoor") {
        return "its larger size can make indoor storage harder";
      }
      if (answers.distance === "10plus") {
        return "longer trips are usually easier on an electric cargo model than a non-assisted one";
      }
      return "its size and weight make it more cumbersome than simpler devices";

    case "bikeshare":
      if (answers.adaptiveNeed === "yes") {
        return "shared bikes are less adaptable for mobility support needs";
      }
      if (answers.carryChildren === "yes") {
        return "shared public bikes are not a practical choice for carrying children";
      }
      if (answers.distance === "10plus") {
        return "it may be less convenient if you need longer trips on a regular basis";
      }
      return "it depends on station availability and may be less reliable than owning a device";

    case "adaptiveMobility":
      if (answers.storage === "indoor") {
        return "some models can be larger and harder to store inside";
      }
      if (answers.transitLink === "yes") {
        return "size and weight vary a lot, so some models are harder to combine with transit";
      }
      if (answers.adaptiveNeed !== "yes") {
        return "it can be more specialized and expensive than you may need";
      }
      return "the best option depends heavily on the specific kind of support needed";

    case "humanPoweredYouth":
      if (answers.distance === "10plus" || answers.transitLink === "yes") {
        return "longer trips or transit-linked trips may push beyond what these simpler devices do best";
      }
      return "they offer less speed and range than larger motorized options";

    default:
      return "it is a less direct fit than some of the higher-ranked options";
  }
}

function getAllResultsReason(rec, answers) {
  if (!answers) return "";

  const positive = getAllResultsPositiveFactor(rec.id, answers);
  const caution = getAllResultsCautionFactor(rec.id, answers);

  if (isSpanishLocale()) {
    return `Puede funcionar porque ${positive}, pero ${caution}.`;
  }

  return `Could work because ${positive}, but ${caution}.`;
}

function getMethodologyScoringFactors(answers) {
  const factors = [];
  const ageLabel = isSpanishLocale() ? getUiText("scoringFactorAge") : "Age";
  const mobilityNeedLabel = isSpanishLocale() ? getUiText("scoringFactorMobilityNeed") : "Mobility need";
  const primaryUseLabel = isSpanishLocale() ? getUiText("scoringFactorPrimaryUse") : "Primary use";
  const transitConnectionLabel = isSpanishLocale() ? getUiText("scoringFactorTransitConnection") : "Transit connection";
  const childCarryingLabel = isSpanishLocale() ? getUiText("scoringFactorChildCarrying") : "Child carrying";
  const tripDistanceLabel = isSpanishLocale() ? getUiText("scoringFactorTripDistance") : "Trip distance";
  const routeTypeLabel = isSpanishLocale() ? getUiText("scoringFactorRouteType") : "Route type";
  const storageLabel = isSpanishLocale() ? getUiText("scoringFactorStorage") : "Storage";

  if (answers.ageInput) factors.push(`${ageLabel}: ${answers.ageInput}`);
  if (answers.pathway !== "exploring" && answers.adaptiveNeed) {
    factors.push(`${mobilityNeedLabel}: ${getAnswerDisplayValue("adaptiveNeed", answers.adaptiveNeed)}`);
  }
  if (answers.primaryUse) factors.push(`${primaryUseLabel}: ${getAnswerDisplayValue("primaryUse", answers.primaryUse)}`);
  if (answers.transitLink) factors.push(`${transitConnectionLabel}: ${getAnswerDisplayValue("transitLink", answers.transitLink)}`);
  if (answers.pathway !== "child" && answers.carryChildren) {
    factors.push(`${childCarryingLabel}: ${getAnswerDisplayValue("carryChildren", answers.carryChildren)}`);
  }
  if (answers.distance) factors.push(`${tripDistanceLabel}: ${getAnswerDisplayValue("distance", answers.distance)}`);
  if (answers.routeType) factors.push(`${routeTypeLabel}: ${getAnswerDisplayValue("routeType", answers.routeType)}`);
  if (answers.storage) factors.push(`${storageLabel}: ${getAnswerDisplayValue("storage", answers.storage)}`);

  return factors;
}

function getCurrentResponseVisibilityRules(answers) {
  const rules = [];

  if (answers.pathway === "exploring") {
    rules.push("In Explore all device options mode, age-based visibility filters are not applied.");
    return rules;
  }

  if (answers.age === "age3to13") {
    rules.push("For ages 3 to 13, only youth options are shown. If a mobility need is selected, adaptive cycles move to the top and other adult-oriented device types are hidden.");
  }

  if (answers.age === "age14to16") {
    rules.push("For ages 14 to 16, e-scooters, compact e-devices, and bikeshare are hidden in this explorer.");
  }

  if (answers.age === "age50plus") {
    rules.push("For ages 50 and older, e-scooters and compact e-devices are hidden in this explorer.");
  }

  if (answers.carryChildren === "yes") {
    rules.push("When carrying children is selected, e-scooters and compact e-devices are hidden.");
  }

  if (answers.routeType === "regularRoads") {
    rules.push("For routes on roads without separation from cars, e-scooters are hidden.");
  }

  if (answers.routeType === "trails") {
    rules.push("For trail-focused routes, e-scooters are hidden.");
  }

  if (
    answers.routeType &&
    answers.routeType !== "bikeLanes" &&
    answers.routeType !== "trails"
  ) {
    rules.push("Compact e-devices appear only for lower-stress routes in this explorer.");
  }

  if (answers.distance && answers.distance !== "under3") {
    rules.push("Compact e-devices appear only for trips under 3 miles in this explorer.");
  }

  if (answers.storage && answers.storage !== "indoor") {
    rules.push("Compact e-devices appear only when indoor storage is selected in this explorer.");
  }

  return rules;
}

function getCurrentResponsePositiveDrivers(answers) {
  const drivers = [];

  if (answers.pathway === "exploring") {
    return drivers;
  }

  if (answers.age === "age3to13") {
    drivers.push(isSpanishLocale() ? getUiText("positiveReasonAgeYouth") : "The selected age range makes the tool highlight youth-oriented options.");
  } else if (answers.age === "age14to16") {
    drivers.push(isSpanishLocale() ? getUiText("positiveReasonAgeTeen") : "The selected age range keeps the focus on age-appropriate options for teenagers.");
  } else if (answers.age === "age50plus") {
    drivers.push(isSpanishLocale() ? getUiText("positiveReasonAgeOlder") : "The selected age range keeps the focus on more stable and practical options.");
  }

  if (answers.adaptiveNeed === "yes") {
    drivers.push(isSpanishLocale() ? getUiText("positiveReasonAdaptiveNeed") : "A selected mobility need shows adaptive cycles and other supportive options more clearly.");
  }

  if (answers.primaryUse === "transport") {
    drivers.push(isSpanishLocale() ? getUiText("positiveReasonTransport") : "Using the device for work, school, or errands shows more practical day-to-day options.");
  } else if (answers.primaryUse === "deliveries") {
    drivers.push(isSpanishLocale() ? getUiText("positiveReasonDeliveries") : "Using the device for deliveries or work shows options with more carrying capacity.");
  } else if (answers.primaryUse === "recreation") {
    drivers.push(isSpanishLocale() ? getUiText("positiveReasonRecreation") : "Using the device for recreation or exercise shows options suited to riding for fun and activity.");
  }

  if (answers.transitLink === "yes") {
    drivers.push(isSpanishLocale() ? getUiText("positiveReasonTransit") : "Including public transit shows options that work better with mixed-mode trips.");
  }

  if (answers.carryChildren === "yes") {
    drivers.push(isSpanishLocale() ? getUiText("positiveReasonChildren") : "Carrying children shows more family-friendly options, such as some bicycles and cargo bikes.");
  }

  if (answers.distance === "under3") {
    drivers.push(isSpanishLocale() ? getUiText("positiveReasonDistanceUnder3") : "Shorter trips show lighter and easier-to-use options more clearly.");
  } else if (answers.distance === "3to9") {
    drivers.push(isSpanishLocale() ? getUiText("positiveReasonDistance3to9") : "Mid-range trips show practical everyday bikes and some electric options more clearly.");
  } else if (answers.distance === "10plus") {
    drivers.push(isSpanishLocale() ? getUiText("positiveReasonDistance10plus") : "Longer trips show electric-assist and higher-range options more clearly.");
  }

  if (answers.routeType === "bikeLanes") {
    drivers.push(isSpanishLocale() ? getUiText("positiveReasonRouteBikeLanes") : "Separated bike lanes allow a wider range of riding options to appear.");
  } else if (answers.routeType === "mixedRoads") {
    drivers.push(isSpanishLocale() ? getUiText("positiveReasonRouteMixedRoads") : "Routes with some traffic show options that tend to feel more stable and practical around cars more clearly.");
  } else if (answers.routeType === "regularRoads") {
    drivers.push(isSpanishLocale() ? getUiText("positiveReasonRouteRegularRoads") : "Routes without separation from cars show more stable, road-ready options more clearly.");
  } else if (answers.routeType === "trails") {
    drivers.push(isSpanishLocale() ? getUiText("positiveReasonRouteTrails") : "Trail and park routes show options suited to that type of riding more clearly.");
  }

  if (answers.storage === "indoor") {
    drivers.push(isSpanishLocale() ? getUiText("positiveReasonStorageIndoor") : "Needing to bring the device inside shows options that are easier to store or fold.");
  } else if (answers.storage === "outdoor") {
    drivers.push(isSpanishLocale() ? getUiText("positiveReasonStorageOutdoor") : "Outdoor storage shows options that are easier to park or leave outside.");
  } else if (answers.storage === "notMajorConcern") {
    drivers.push(isSpanishLocale() ? getUiText("positiveReasonStorageFlexible") : "Flexible storage keeps a wider mix of device types in consideration.");
  }

  return drivers;
}

function getCurrentResponseLimitingNotes(answers) {
  const notes = [];

  if (answers.pathway === "exploring") {
    return notes;
  }

  if (answers.age === "age14to16") {
    notes.push(isSpanishLocale() ? getUiText("negativeReasonAgeTeen") : "Some shared or motorized options appear lower or do not appear for this age range.");
  } else if (answers.age === "age50plus") {
    notes.push(isSpanishLocale() ? getUiText("negativeReasonAgeOlder") : "Some smaller or standing options appear lower for this age range.");
  }

  if (answers.carryChildren === "yes") {
    notes.push(isSpanishLocale() ? getUiText("negativeReasonChildren") : "Standing devices and smaller personal e-devices appear lower when carrying children is selected.");
  }

  if (answers.routeType === "regularRoads") {
    notes.push(isSpanishLocale() ? getUiText("negativeReasonRouteRegularRoads") : "Some lighter options appear lower on routes without separation from cars.");
  } else if (answers.routeType === "trails") {
    notes.push(isSpanishLocale() ? getUiText("negativeReasonRouteTrails") : "Some small-wheel options appear lower on trail or park routes.");
  }

  return notes.slice(0, 2);
}

function getResultsVisibilityLawNotes() {
  if (isSpanishLocale()) {
    return [
      getUiText("visibilityRuleHelmets"),
      getUiText("visibilityRuleOperators"),
      getUiText("visibilityRulePolicy")
    ];
  }

  return [
    "Current Massachusetts law requires helmets for bicycle riders age 16 and under, and for manually propelled scooters age 16 and under.",
    "Some shared systems have their own service requirements. For example, Bluebikes currently requires riders to be 16 or older.",
    "Some options are shown more cautiously in this tool to reflect the report's safety-focused approach, even when existing state law does not use the exact same categories."
  ];
}

function renderResultsMethodology(answers) {
  if (answers.pathway === "exploring") {
    return "";
  }

  const scoringFactors = getMethodologyScoringFactors(answers);
  const currentResponseRules = getCurrentResponsePositiveDrivers(answers);
  const limitingNotes = getCurrentResponseLimitingNotes(answers);
  const visibilityLawNotes = getResultsVisibilityLawNotes();
  const scoringFactorsHtml = scoringFactors
    .map((item) => `<li>${item}</li>`)
    .join("");
  const visibilityLawNotesHtml = visibilityLawNotes
    .map((item) => `<li>${item}</li>`)
    .join("");
  const currentResponseRulesHtml = currentResponseRules.length
    ? currentResponseRules.map((item) => `<li>${item}</li>`).join("")
    : `<li>${isSpanishLocale() ? getUiText("noAdditionalVisibilityRules") : "No additional notes changed what showed up for this response."}</li>`;
  const limitingNotesHtml = limitingNotes.length
    ? `
        <h3 class="results-methodology__section-title">${isSpanishLocale() ? getUiText("whatMayLowerOptions") : RESULTS_METHODS_LIMITING_TITLE_TEXT}</h3>
        <ul class="results-methodology__list">${limitingNotes.map((item) => `<li>${item}</li>`).join("")}</ul>
      `
    : "";

  return `
    <section class="results-methodology" data-accordion-root>
      <button
        type="button"
        class="details-toggle-btn"
        id="results-methodology-trigger"
        aria-expanded="${APP_STATE.resultsMethodologyOpen ? "true" : "false"}"
        aria-controls="results-methodology-panel"
      >${isSpanishLocale() ? getUiText("howResultsAreShown") : RESULTS_METHODS_SUMMARY_TEXT}</button>
      <div
        id="results-methodology-panel"
        class="results-methodology__body"
        role="region"
        aria-labelledby="results-methodology-trigger"
        ${APP_STATE.resultsMethodologyOpen ? "" : "hidden"}
        data-accordion-panel
      >
        <h3 class="results-methodology__title">${isSpanishLocale() ? getUiText("howExplorerWorks") : RESULTS_METHODS_TITLE_TEXT}</h3>
        <p>${isSpanishLocale() ? getUiText("resultsOverviewText") : RESULTS_METHODS_OVERVIEW_TEXT}</p>
        <p>${isSpanishLocale() ? getUiText("resultsReportText") : RESULTS_METHODS_REPORT_TEXT}</p>

        <h3 class="results-methodology__section-title">${isSpanishLocale() ? getUiText("currentVisibilityRules") : RESULTS_METHODS_VISIBILITY_TITLE_TEXT}</h3>
        <ul class="results-methodology__list">${visibilityLawNotesHtml}</ul>

        <h3 class="results-methodology__section-title">${isSpanishLocale() ? getUiText("whatAffectsScoring") : RESULTS_METHODS_SCORING_TITLE_TEXT}</h3>
        <ul class="results-methodology__list">${scoringFactorsHtml}</ul>

        <h3 class="results-methodology__section-title">${isSpanishLocale() ? getUiText("whatHelpedShowResults") : RESULTS_METHODS_CURRENT_RESPONSE_TITLE_TEXT}</h3>
        <ul class="results-methodology__list">${currentResponseRulesHtml}</ul>
        ${limitingNotesHtml}

        <p class="results-methodology__links">
          <a href="${REPORT_URL}" target="_blank" rel="noopener noreferrer">${isSpanishLocale() ? getUiText("readCommissionReport") : RESULTS_METHODS_REPORT_LINK_TEXT}</a>
          <span aria-hidden="true"> | </span>
          <a href="${BICYCLE_LAW_URL}" target="_blank" rel="noopener noreferrer">${isSpanishLocale() ? getUiText("massLawAboutBicycles") : RESULTS_METHODS_BICYCLE_LAW_LINK_TEXT}</a>
        </p>
      </div>
    </section>
  `;
}

function renderAllDeviceResultsPanel(allRecommendations, answers) {
  const panelRecommendations = allRecommendations
    .filter((rec) => rec.score > 0)
    .slice(2);
  if (!panelRecommendations.length) return "";

  const topPanelScore = panelRecommendations[0]?.score ?? 0;
  const itemsHtml = panelRecommendations
    .map((rec, index) => {
      const imageSrc = getAllResultsImage(rec.id, answers);
      const priority = getRecommendationPriorityMeta(index, rec.score, topPanelScore, rec.id, answers);
      const rawReason = getAllResultsReason(rec, answers, priority);
      const reason = isSpanishLocale()
        ? rawReason
        : formatTextForPathway(rawReason, answers.pathway);
      const itemId = `all-results-item-${rec.id}-${index}`;
      const deviceId = `${itemId}-device`;
      const tagId = `${itemId}-tag`;
      const reasonId = `${itemId}-reason`;

      return `
      <li class="all-results-item" aria-labelledby="${deviceId} ${tagId} ${reasonId}">
        ${imageSrc ? `<img src="${imageSrc}" alt="${getRecommendationImageAlt(rec.id, answers)}" class="all-results-image">` : ""}
        <div class="all-results-copy">
          <p id="${deviceId}" class="all-results-device">${rec.label}</p>
          <p id="${tagId}" class="all-results-tag ${priority.className}">${priority.label}</p>
          <p id="${reasonId}" class="all-results-reason"><em>${reason}</em></p>
        </div>
      </li>
    `;
    })
    .join("");

  return `
    <section class="all-results-panel" data-accordion-root>
      <button
        type="button"
        class="details-toggle-btn"
        id="all-results-trigger"
        aria-expanded="${APP_STATE.allResultsPanelOpen ? "true" : "false"}"
        aria-controls="all-results-panel"
      >${isSpanishLocale() ? getUiText("seeAllDeviceTypes") : "See other relevant devices"}</button>
      <div
        id="all-results-panel"
        aria-labelledby="all-results-trigger"
        ${APP_STATE.allResultsPanelOpen ? "" : "hidden"}
        data-accordion-panel
      >
        <ul class="all-results-list">${itemsHtml}</ul>
      </div>
    </section>
  `;
}

function renderPrintRecommendationSummary(rec, answers, pathway) {
  const content = getDeviceContent(rec.id);
  if (!content) return "";
  const printRationaleHeading =
    pathway === "exploring"
      ? (isSpanishLocale() ? getUiText("whyConsiderIt") : "Why it appears")
      : pathway === "myself"
        ? (isSpanishLocale() ? getUiText("whyThisFitsForYou") : "Why it appears")
        : (isSpanishLocale() ? getUiText("whyThisFits") : "Why it appears");

  const imageSrc = getRecommendationImage(rec.id, answers, content);
  const imageTag = getRecommendationImageTag(rec.id, answers);
  const considerationItems = getResultCardConsiderationItems(rec.id, answers, content);
  let considerations = getConsiderBase(rec.id);

  if (answers.storage !== "indoor" && (rec.id === "ebike" || rec.id === "escooter")) {
    considerations = considerations.filter((_, itemIndex) => itemIndex !== 0);
  }

  const orderedConsiderations = [...considerations, ...considerationItems];
  const considerationsHtml = orderedConsiderations
    .slice(0, 3)
    .map((item) => `<li>${stripPrintNextStepsText(formatTextForPathway(item, pathway))}</li>`)
    .join("");
  const printReason = stripPrintNextStepsText(getRecommendationReason(rec.id, answers, pathway));

  return `
    <article class="print-rec-card">
      <div class="print-rec-header">
        ${imageSrc ? `<img src="${imageSrc}" alt="${getRecommendationImageAlt(rec.id, answers)}" class="print-rec-image">` : ""}
      <div class="print-rec-title-wrap">
        <h4 class="print-rec-title">${rec.label}</h4>
        ${imageTag ? `<p class="print-rec-image-tag"><em>${imageTag}</em></p>` : ""}
      </div>
      </div>
      <p class="print-rec-reason"><strong>${printRationaleHeading}:</strong> ${printReason}</p>
      <p class="print-rec-cost"><strong>${isSpanishLocale() ? getUiText("typicalCost") : "Typical cost"}:</strong> ${content.cost}</p>
      ${considerationsHtml ? `<ul class="print-rec-list">${considerationsHtml}</ul>` : ""}
    </article>
  `;
}

function stripPrintNextStepsText(text) {
  if (!text) return text;

  return text
    .replace(/\s*See Next steps to[^.]*\./gi, "")
    .replace(/\s*See Next steps for[^.]*\./gi, "")
    .replace(/\s*or see Next steps to[^.]*\./gi, "")
    .replace(/\s*Consulta Próximos pasos para[^.]*\./gi, "")
    .replace(/\s*o consulta Próximos pasos[^.]*\./gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function getPrintDensityClass(recommendations, rawAnswers, answers, pathway) {
  const topRecommendations = recommendations.slice(0, 2);
  const answerTextLength = getPrintableQuestionKeys(rawAnswers)
    .map((questionId) => {
      const label = getQuestionLabelForPathway(questionId, pathway);
      const value = getAnswerDisplayValue(questionId, rawAnswers[questionId]);
      return `${label} ${value}`.trim();
    })
    .join(" ")
    .length;

  const recommendationTextLength = topRecommendations.reduce((total, rec) => {
    const content = getDeviceContent(rec.id);
    if (!content) return total;

    const reason = getRecommendationReason(rec.id, answers, pathway);
    const considerations = [
      ...getConsiderBase(rec.id),
      ...getResultCardConsiderationItems(rec.id, answers, content)
    ]
      .slice(0, 3)
      .join(" ");

    return total + reason.length + considerations.length + content.cost.length + rec.label.length;
  }, 0);

  const totalLength = answerTextLength + recommendationTextLength;

  if (totalLength > 2100) return "print-density-tight";
  if (totalLength > 1500) return "print-density-compact";
  return "print-density-default";
}

function renderPrintSummary(recommendations, answers, pathway) {
  const rawAnswers = APP_STATE.answers || {};
  const densityClass = getPrintDensityClass(recommendations, rawAnswers, answers, pathway);
  const topRecommendationsHtml = recommendations
    .slice(0, 2)
    .map((rec) => renderPrintRecommendationSummary(rec, answers, pathway))
    .join("");

  return `
    <section class="print-summary ${densityClass}" aria-hidden="true">
      <div class="print-header">
        <h2 class="print-title">${isSpanishLocale() ? getUiText("title") : APP_NAME}</h2>
        <img src="lab-logo-black.png" alt="${isSpanishLocale() ? getUiText("labLogoAlt") : "The Lab at MassDOT logo"}" class="print-logo">
      </div>
      ${renderPrintInputsSummary(rawAnswers)}
      <section class="print-section">
        <h3 class="print-section-heading">${pathway === "exploring"
          ? (isSpanishLocale() ? getUiText("selectedMicromobilityDevice") : "Selected micromobility device")
          : (isSpanishLocale() ? getUiText("seeMicromobilityOptions") : "See micromobility options")}</h3>
        <div class="print-rec-grid">${topRecommendationsHtml}</div>
      </section>
  `;
}

function formatTextForPathway(text, pathway) {
  if (!text) {
    return text;
  }

  if (isSpanishLocale()) {
    return text;
  }

  if (pathway === "child") {
    return text
      .replace(/if you have a disability or need mobility assistance/gi, "if a child has a disability or needs mobility assistance")
      .replace(/if you have a disability and are carrying a child/gi, "if the child has a disability and is carrying a child")
      .replace(/Check your local DCR regulations/gi, "Check local DCR regulations")
      .replace(/Because you plan to/gi, "Because the child plans to")
      .replace(/Because you use/gi, "Because the child uses")
      .replace(/Because you need/gi, "Because the child needs")
      .replace(/Because you have/gi, "Because the child has")
      .replace(/Given you use/gi, "Given the child uses")
      .replace(/Since you will/gi, "Since the child will")
      .replace(/Since you plan to/gi, "Since the child plans to")
      .replace(/If you plan to/gi, "If the child plans to")
      .replace(/If you are/gi, "If the child is")
      .replace(/If you use/gi, "If the child uses")
      .replace(/If you live/gi, "If the child lives")
      .replace(/You will/gi, "the child will")
      .replace(/You are/gi, "the child is")
      .replace(/You use/gi, "the child uses")
      .replace(/You need/gi, "the child needs")
      .replace(/You have/gi, "the child has")
      .replace(/You plan to/gi, "the child plans to")
      .replace(/You should/gi, "the child should")
      .replace(/For you/gi, "for the child")
      .replace(/your bike fits you well/gi, "the bike fits the child well")
      .replace(/your bike fits you/gi, "the bike fits the child")
      .replace(/\byour\b/gi, "the child's")
      .replace(/\byou\b/gi, "the child");
  }

  if (pathway === "exploring") {
    return text
      .replace(/Since you will carry children/gi, "If carrying children is a priority")
      .replace(/Since you plan to carry children/gi, "If carrying children is a priority")
      .replace(/Since you are carrying children/gi, "If carrying children is a priority")
      .replace(/With the right add-ons, it can support carrying a child\./gi, "With the right add-ons, it can support carrying a child if needed.")
      .replace(/Some models can also support carrying children or extra cargo\./gi, "Some models can also support carrying children or extra cargo if needed.")
      .replace(/Carrying children with cargo bikes is an excellent and fun option because they are designed to carry people securely\./gi, "Cargo bikes can be a strong option for carrying children because they are designed to carry people securely.");
  }

  if (pathway !== "someoneElse") {
    return text;
  }

  return text
    .replace(/Check the rider's local DCR regulations/gi, "Check local DCR regulations")
    .replace(/ensuring the rider's bike fits the rider well/gi, "ensuring a good-fitting bicycle")
    .replace(/ensuring the rider's bike fits the rider/gi, "ensuring a good-fitting bicycle")
    .replace(/Since the rider will carry children/gi, "If carrying children is a priority")
    .replace(/Since the rider plans to carry children/gi, "If carrying children is a priority")
    .replace(/Since the rider carries children/gi, "If carrying children is a priority")
    .replace(/Since you will carry children/gi, "If carrying children is a priority")
    .replace(/Since you plan to carry children/gi, "If carrying children is a priority")
    .replace(/\b[Bb]ecause you plan to\b/g, "Because the rider plans to")
    .replace(/\b[Bb]ecause you use\b/g, "Because the rider uses")
    .replace(/\b[Bb]ecause you need\b/g, "Because the rider needs")
    .replace(/\b[Bb]ecause you have\b/g, "Because the rider has")
    .replace(/\b[Gg]iven you use\b/g, "Given the rider uses")
    .replace(/\b[Ss]ince you will\b/g, "Since the rider will")
    .replace(/\b[Ii]f you plan to\b/g, "If the rider plans to")
    .replace(/\b[Ii]f you are\b/g, "If the rider is")
    .replace(/\b[Ii]f you use\b/g, "If the rider uses")
    .replace(/\b[Ii]f you live\b/g, "If the rider lives")
    .replace(/\b[Yy]ou will\b/g, "the rider will")
    .replace(/\b[Yy]ou are\b/g, "the rider is")
    .replace(/\b[Yy]ou use\b/g, "the rider uses")
    .replace(/\b[Yy]ou need\b/g, "the rider needs")
    .replace(/\b[Yy]ou have\b/g, "the rider has")
    .replace(/\b[Yy]ou plan to\b/g, "the rider plans to")
    .replace(/\b[Yy]ou should\b/g, "the rider should")
    .replace(/\b[Ff]or you\b/g, "for the rider")
    .replace(/\b[Yy]our\b/g, "the rider's")
    .replace(/\b[Yy]ou\b/g, "the rider");
}

function shouldIncludeExploreConditionalSlot(recId, slot) {
  if (slot.startsWith("age")) return false;
  if (slot === "adaptiveNeedNo") return false;
  if (slot === "transitLinkNo") return false;
  if (slot === "carryChildrenNo") return false;
  if (slot === "storageNotMajorConcern") return false;

  if (recId === "lowSpeedPoweredMicromobility" && slot === "transitLinkYes") return false;
  if (recId === "cargoBike" && (slot === "deliveries" || slot === "transitLinkYes")) return false;

  if (recId !== "adaptiveMobility" && slot === "adaptiveNeedYes") {
    return false;
  }

  return true;
}

function getRecommendationReason(recId, answers, pathway) {
  const content = getDeviceContent(recId);
  if (!content) return "";

  if (pathway === "exploring") {
    return getExploreReasonText(recId) || formatTextForPathway(getWhyBase(recId), pathway);
  }

  const orderedWhyConditionals =
    Object.entries(content.whyConditional || {})
      .filter(([slot, text]) => {
        const matchedSlots = new Set(getMatchedConsiderationSlots(answers));
        if (!text || !matchedSlots.has(slot)) return false;

        if (recId === "adaptiveMobility" && slot === "adaptiveNeedYes") {
          return answers.adaptiveNeed === "yes";
        }

        return true;
      })
      .map(([, text]) => text);

  const formattedParts = [getWhyBase(recId), ...orderedWhyConditionals]
    .filter(Boolean)
    .map((text) => formatTextForPathway(text, pathway));

  return formattedParts.join(" ");
}

function shouldSuggestFoldable(answers) {
  return (
    answers.carryChildren !== "yes" &&
    answers.primaryUse === "transport" &&
    (answers.transitLink === "yes" || answers.storage === "indoor")
  );
}

function shouldUseRecreationTrailImage(answers) {
  return answers?.primaryUse === "recreation" || answers?.routeType === "trails";
}

function getRecommendationImage(recId, answers, content) {
  const foldableSuggested = shouldSuggestFoldable(answers);
  const recreationTrailImage = shouldUseRecreationTrailImage(answers);

  if (recreationTrailImage && recId === "bicycle") {
    return "mountain-bike-transparent.png";
  }

  if (recreationTrailImage && recId === "ebike") {
    return "e-mtb-transparent.png";
  }

  if (foldableSuggested && recId === "bicycle") {
    return "foldable-bike-v2.png";
  }

  if (foldableSuggested && recId === "ebike") {
    return "foldable-ebike-v2.png";
  }

  return content.image;
}

function getRecommendationImageAlt(recId, answers) {
  const foldableSuggested = shouldSuggestFoldable(answers);
  const recreationTrailImage = shouldUseRecreationTrailImage(answers);

  if (recreationTrailImage && recId === "bicycle") {
    return isSpanishLocale() ? "Bicicleta de montaña" : "Mountain bicycle";
  }

  if (recreationTrailImage && recId === "ebike") {
    return isSpanishLocale() ? "Bicicleta eléctrica de montaña" : "Electric mountain bicycle";
  }

  if (foldableSuggested && recId === "bicycle") {
    return isSpanishLocale() ? getUiText("foldableBikeImageAlt") : "Foldable bicycle";
  }

  if (foldableSuggested && recId === "ebike") {
    return isSpanishLocale() ? getUiText("foldableEbikeImageAlt") : "Foldable electric bicycle";
  }

  return getRecommendationImageAltMap(recId);
}

function getMatchedConsiderationSlots(answers) {
  const slots = [];

  if (answers.age) {
    slots.push(answers.age);
  }

  if (answers.adaptiveNeed === "yes") {
    slots.push("adaptiveNeedYes");
  } else if (answers.adaptiveNeed === "no") {
    slots.push("adaptiveNeedNo");
  }

  if (answers.primaryUse === "transport") {
    slots.push("transport");
  } else if (answers.primaryUse === "deliveries") {
    slots.push("deliveries");
  } else if (answers.primaryUse === "recreation") {
    slots.push("recreation");
  }

  if (answers.transitLink === "yes") {
    slots.push("transitLinkYes");
  } else if (answers.transitLink === "no") {
    slots.push("transitLinkNo");
  }

  if (answers.carryChildren === "yes") {
    slots.push("carryChildrenYes");
  } else if (answers.carryChildren === "no") {
    slots.push("carryChildrenNo");
  }

  if (answers.distance === "under3") {
    slots.push("distanceUnder3");
  } else if (answers.distance === "3to9") {
    slots.push("distance3to9");
  } else if (answers.distance === "10plus") {
    slots.push("distance10plus");
  }

  if (answers.routeType === "bikeLanes") {
    slots.push("routeBikeLanes");
  } else if (answers.routeType === "mixedRoads") {
    slots.push("routeMixedRoads");
  } else if (answers.routeType === "regularRoads") {
    slots.push("routeRegularRoads");
  } else if (answers.routeType === "trails") {
    slots.push("routeTrails");
  }

  if (answers.storage === "indoor") {
    slots.push("storageIndoor");
  } else if (answers.storage === "outdoor") {
    slots.push("storageOutdoor");
  } else if (answers.storage === "notMajorConcern") {
    slots.push("storageNotMajorConcern");
  }

  return slots;
}

function getResultCardConsiderationItems(recId, answers, content) {
  const items =
    answers.pathway === "exploring"
      ? Object.entries(content.considerConditional || {})
          .filter(([slot, text]) => text && shouldIncludeExploreConditionalSlot(recId, slot))
          .map(([, text]) => text)
      : Object.entries(content.considerConditional || {})
          .filter(([slot, text]) => {
            const matchedSlots = new Set(getMatchedConsiderationSlots(answers));
            if (!text || !matchedSlots.has(slot)) return false;

            if (recId === "adaptiveMobility" && slot === "adaptiveNeedYes") {
              return answers.pathway === "child" && answers.adaptiveNeed === "yes";
            }

            return true;
          })
          .map(([, text]) => text);

  if (content.extraLabel && content.extraValue) {
    items.push(`
      <span class="recommendation-extra">
        <span class="recommendation-extra-label">${content.extraLabel}</span>
        <span class="recommendation-extra-value">${content.extraValue}</span>
      </span>
    `);
  }

  if (answers.pathway === "exploring" && recId === "escooter") {
    const bikeLaneText = getDeviceContent(recId)?.considerConditional?.routeBikeLanes || "";
    const mixedRoadText = getDeviceContent(recId)?.considerConditional?.routeMixedRoads || "";
    const bikeLaneIndex = items.indexOf(bikeLaneText);
    const mixedRoadIndex = items.indexOf(mixedRoadText);

    if (bikeLaneIndex !== -1 && mixedRoadIndex !== -1) {
      items.splice(
        Math.min(bikeLaneIndex, mixedRoadIndex),
        2,
        isSpanishLocale()
          ? "Por sus ruedas pequeñas, la posición de pie y la falta de suspensión, los scooters eléctricos funcionan mejor en ciclovías y superficies lisas, y pueden sentirse menos cómodos en calles irregulares o con más tráfico. Considera un modelo con suspensión y llantas para todo clima."
          : "Due to their small wheels, standing position, and lack of suspension, e-scooters perform best on bike lanes and smooth paths, and can feel less comfortable on rougher roads or in heavier traffic. Consider a model with suspesion and all-season tires."
      );
    }
  }

  return items.filter(Boolean).filter((item, index, allItems) => allItems.indexOf(item) === index);
}

function getRecommendationImageTag(recId, answers) {
  const foldableSuggested = shouldSuggestFoldable(answers);

  if (foldableSuggested && recId === "bicycle") {
    return isSpanishLocale() ? getUiText("foldableBikeTag") : "Suggested type: Foldable bike";
  }

  if (foldableSuggested && recId === "ebike") {
    return isSpanishLocale() ? getUiText("foldableEbikeTag") : "Suggested type: Foldable e-bike";
  }

  return "";
}

function getConditionalNextSteps(recId, answers) {
  const steps = [];

  if (answers.transitLink === "yes") {
    steps.push({
      label: isSpanishLocale() ? "Consulta las políticas de micromovilidad de la Autoridad de Transporte de la Bahía de Massachusetts" : "Check Massachusetts Bay Transportation Authority micromobility policies",
      url: "https://www.mbta.com/bikes"
    });
    if (recId !== "bikeshare") {
      steps.push({
        label: isSpanishLocale()
          ? "Aprende a estacionar de forma segura tu dispositivo de micromovilidad en una estación de la Autoridad de Transporte de la Bahía de Massachusetts"
          : "Learn how to safely park your micromobility device at a Massachusetts Bay Transportation Authority station",
        url: "https://bc.mbta.com/riding_the_t/bikes/register/Default.asp"
      });
    }
  }

  if (
    answers.storage === "indoor" &&
    (recId === "ebike" || recId === "escooter" || recId === "lowSpeedPoweredMicromobility" || recId === "cargoBike" || recId === "adaptiveMobility")
  ) {
    steps.push({
      label: isSpanishLocale()
        ? "Aprende a cargar de forma segura tu batería de micromovilidad y a evitar incendios"
        : "Learn how to safely charge your micromobility battery and avoid fires",
      url: "https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Micromobility-Information-Center"
    });
  }

  return steps;
}

function renderSingleRecommendationCard(rec, answers, pathway, resultsMethodologyHtml = "") {
  const content = getDeviceContent(rec.id);
  const considerationItems = getResultCardConsiderationItems(rec.id, answers, content);
  const recommendationTitleId = `recommendation-title-${rec.id}`;
  const recommendationReasonId = `recommendation-reason-${rec.id}`;
  const recommendationIntroId = `recommendation-intro-${rec.id}`;
  const recommendationReasonHeadingId = `recommendation-reason-heading-${rec.id}`;
  const recommendationGuidanceId = `recommendation-guidance-${rec.id}`;
  const recommendationGuidanceHeadingId = `recommendation-guidance-heading-${rec.id}`;
  const recommendationCostId = `recommendation-cost-${rec.id}`;
  const recommendationLearnMoreId = `recommendation-learn-more-${rec.id}`;
  const recommendationNextStepsId = `recommendation-next-steps-${rec.id}`;
  const recommendationNextStepsHeadingId = `recommendation-next-steps-heading-${rec.id}`;
  const rationaleHeading =
    pathway === "exploring"
      ? (isSpanishLocale() ? getUiText("whyConsiderIt") : RESULTS_REASON_HEADING_TEXT)
      : pathway === "myself"
        ? (isSpanishLocale() ? getUiText("whyThisFitsForYou") : RESULTS_REASON_HEADING_TEXT)
        : (isSpanishLocale() ? getUiText("whyThisFits") : RESULTS_REASON_HEADING_TEXT);
  const considerations = getConsiderBase(rec.id);

  let filteredBaseConsiderations = [...considerations];

  if (answers.storage !== "indoor" && (rec.id === "ebike" || rec.id === "escooter")) {
    filteredBaseConsiderations = filteredBaseConsiderations.filter(
      (_, itemIndex) => itemIndex !== 0
    );
  }

  const orderedConsiderations = [
    ...filteredBaseConsiderations,
    ...considerationItems,
  ].filter(Boolean);

  const considerationGroups = [];

  orderedConsiderations.forEach((item, itemIndex) => {
    const lastGroup = considerationGroups[considerationGroups.length - 1];
    const canNestUnderPrevious =
      rec.id === "bikeshare" &&
      (itemIndex === 3 || itemIndex === 4) &&
      lastGroup &&
      considerationGroups.length === 3;

    if (canNestUnderPrevious) {
      lastGroup.children.push(item);
      return;
    }

    considerationGroups.push({ item, children: [] });
  });

  const considerationsHtml = considerationGroups
    .map(({ item, children }) => {
      const childrenHtml = children.length
        ? `
          <ul class="recommendation-sublist">
            ${children.map((child) => `<li class="recommendation-subitem">${formatTextForPathway(child, pathway)}</li>`).join("")}
          </ul>
        `
        : "";

      return `<li class="guidance-item">${formatTextForPathway(item, pathway)}${childrenHtml}</li>`;
    })
    .join("");

  const baseNextSteps = getNextSteps(rec.id);
  const learnMoreStep = baseNextSteps[0] || null;
  const nextSteps = [...baseNextSteps.slice(1), ...getConditionalNextSteps(rec.id, answers)]
    .filter((step, index, allSteps) =>
      allSteps.findIndex((candidate) => candidate.url === step.url) === index
    )
    .slice(0, 8);

  const nextStepGroups = [];

  nextSteps.forEach((step) => {
    const isAdditionalShopLink =
      step.url === PINKBIKE_URL ||
      step.url === SINGLETRACKS_URL;

    const lastGroup = nextStepGroups[nextStepGroups.length - 1];
    const canNestUnderPrevious =
      isAdditionalShopLink &&
      lastGroup &&
      lastGroup.step.url === BIKE_SHOP_URL;

    if (canNestUnderPrevious) {
      lastGroup.children.push(step);
      return;
    }

    nextStepGroups.push({ step, children: [] });
  });

  const nextStepsHtml = nextStepGroups
    .map(({ step, children }) => {
      const childrenHtml = children.length
        ? `
          <ul class="next-step-sublist">
            ${children
              .map(
                (child) => `
                  <li class="next-step-subitem">
                    <a href="${child.url}" target="_blank" rel="noopener noreferrer">${formatTextForPathway(child.label, pathway)}</a>
                  </li>
                `
              )
              .join("")}
          </ul>
        `
        : "";

      return `
        <li class="next-step-item">
          <a href="${step.url}" target="_blank" rel="noopener noreferrer">${formatTextForPathway(step.label, pathway)}</a>
          ${childrenHtml}
        </li>
      `;
    })
    .join("");

  const imageSrc = getRecommendationImage(rec.id, answers, content);
  const imageTag = getRecommendationImageTag(rec.id, answers);
  const costLabel = isSpanishLocale() ? getUiText("typicalCost") : "Typical cost";
  const learnMoreHtml = learnMoreStep
    ? `
        <p id="${recommendationLearnMoreId}" class="guidance-learn-more">
          <a href="${learnMoreStep.url}" target="_blank" rel="noopener noreferrer">${formatTextForPathway(learnMoreStep.label, pathway)}</a>
        </p>
      `
    : "";

  return `
    <section
      class="recommendation-card"
      role="region"
      aria-labelledby="${recommendationTitleId}"
      aria-describedby="${recommendationIntroId} ${recommendationReasonId}"
    >
      <h1 id="${recommendationTitleId}" class="recommendation-title" tabindex="-1">${rec.label}</h1>
      <p id="${recommendationIntroId}" class="visually-hidden">${rationaleHeading}</p>

      ${imageSrc ? `<img src="${imageSrc}" alt="${getRecommendationImageAlt(rec.id, answers)}" class="device-image">` : ""}
      ${imageTag ? `<p class="recommendation-image-tag">${imageTag}</p>` : ""}

      <h2 id="${recommendationReasonHeadingId}" class="guidance-heading">${rationaleHeading}</h2>
      <p
        id="${recommendationReasonId}"
        class="recommendation-reason"
        aria-label="${rationaleHeading}. ${getRecommendationReason(rec.id, answers, pathway)}"
      >
        ${getRecommendationReason(rec.id, answers, pathway)}
      </p>

      ${resultsMethodologyHtml}

      <div
        id="${recommendationGuidanceId}"
        class="guidance"
        role="group"
        aria-labelledby="${recommendationGuidanceHeadingId}"
      >
        <h2 id="${recommendationGuidanceHeadingId}" class="guidance-heading">${isSpanishLocale() ? getUiText("thingsToConsider") : RESULTS_GUIDANCE_HEADING_TEXT}</h2>
        <ul class="guidance-list" aria-labelledby="${recommendationGuidanceHeadingId}">${considerationsHtml}</ul>

        <p
          id="${recommendationCostId}"
          class="device-cost"
          aria-label="${costLabel}: ${content.cost}"
        >
          <span class="device-cost-label">${costLabel}:</span>
          <span class="device-cost-value">${content.cost}</span>
        </p>
        ${learnMoreHtml}
      </div>

      <div
        id="${recommendationNextStepsId}"
        class="next-steps"
        role="group"
        aria-labelledby="${recommendationNextStepsHeadingId}"
      >
        <h2 id="${recommendationNextStepsHeadingId}" class="guidance-heading">${isSpanishLocale() ? getUiText("nextSteps") : RESULTS_NEXT_STEPS_HEADING_TEXT}</h2>
        <ul class="next-steps-list">${nextStepsHtml}</ul>
      </div>
    </section>
  `;
}

function announceResultsSummary(rec, answers, pathway) {
  const liveRegionEl = document.getElementById("resultsLive");
  if (!liveRegionEl) return;

  const optionCount = (APP_STATE.currentRecommendations || []).length;
  const summaryText = optionCount === 1
    ? (isSpanishLocale() ? "Results updated. One option available." : "Results updated. One option available.")
    : (isSpanishLocale()
        ? `Results updated. ${optionCount} options available.`
        : `Results updated. ${optionCount} options available.`);

  liveRegionEl.textContent = "";

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      if (document.getElementById("resultsLive") === liveRegionEl) {
        liveRegionEl.textContent = summaryText;
      }
    });
  });
}

function getResultsFocusSummary(rec, answers, pathway) {
  if (!rec) return "";

  const rationaleHeading =
    pathway === "exploring"
      ? (isSpanishLocale() ? getUiText("whyConsiderIt") : RESULTS_REASON_HEADING_TEXT)
      : pathway === "myself"
        ? (isSpanishLocale() ? getUiText("whyThisFitsForYou") : RESULTS_REASON_HEADING_TEXT)
        : (isSpanishLocale() ? getUiText("whyThisFits") : RESULTS_REASON_HEADING_TEXT);

  return `${rec.label}. ${rationaleHeading}. ${getRecommendationReason(rec.id, answers, pathway)}`;
}

function resetAppState() {
  APP_STATE.currentStep = 0;
  APP_STATE.currentResultIndex = 0;
  APP_STATE.allResultsPanelOpen = false;
  APP_STATE.resultsMethodologyOpen = false;
  APP_STATE.currentRecommendations = [];
  APP_STATE.currentAllRecommendations = [];
  APP_STATE.currentNormalizedAnswers = null;
  APP_STATE.currentScores = null;
  APP_STATE.currentPathway = null;
  APP_STATE.answers = {};
}

function resetIntroState() {
  const intro = document.getElementById("introText");
  const heroTitle = document.getElementById("heroTitle");

  renderLandingCopy();

  if (intro) {
    intro.classList.remove("hidden");
    intro.classList.remove("results-state");
  }

  if (heroTitle) {
    heroTitle.classList.remove("hidden");
  }


}

function renderRecommendations(recommendations, allRecommendations, answers, scores, pathway) {
  const result = document.getElementById("result");
  const intro = document.getElementById("introText");
  const heroTitle = document.getElementById("heroTitle");
  const formStep = document.getElementById("formStep");
  const formNav = document.getElementById("formNav");
  const progress = document.getElementById("progress");
  const backBtn = document.getElementById("backBtn");
  const nextBtn = document.getElementById("nextBtn");

  setAppViewMode("results");
  updateLandingLanguageToggle();

  if (intro) {
    intro.classList.add("hidden");
    intro.classList.remove("results-state");
  }

  if (heroTitle) {
    heroTitle.classList.add("hidden");
  }

  setLandingHeaderVisibility(false);

  if (!result) return;

  if (formStep) formStep.innerHTML = "";
  if (formNav) formNav.classList.add("hidden");
  if (backBtn) backBtn.classList.add("hidden");
  if (nextBtn) nextBtn.classList.add("hidden");

  if (!recommendations.length) {
    setResultsContext();
    result.classList.remove("hidden");
    result.innerHTML = `<strong>${isSpanishLocale() ? getUiText("noRecommendations") : "No recommendations available."}</strong>`;
    return;
  }

  APP_STATE.currentRecommendations = recommendations;
  APP_STATE.currentAllRecommendations = allRecommendations;
  APP_STATE.currentNormalizedAnswers = answers;
  APP_STATE.currentScores = scores;
  APP_STATE.currentPathway = pathway;
  APP_STATE.currentResultIndex = 0;

  renderCurrentRecommendationPage();
}

function renderCurrentRecommendationPage() {
  const result = document.getElementById("result");
  if (!result) return;

  const recommendations = APP_STATE.currentRecommendations || [];
  const allRecommendations = APP_STATE.currentAllRecommendations || [];
  const answers = APP_STATE.currentNormalizedAnswers;
  const pathway = APP_STATE.currentPathway;
  const index = APP_STATE.currentResultIndex;

  if (!recommendations.length || !answers) return;

  const rec = recommendations[index];
  const resultsMethodologyHtml = renderResultsMethodology(answers);
  const cardHtml = renderSingleRecommendationCard(rec, answers, pathway, resultsMethodologyHtml);
  const allResultsPanelHtml =
    pathway === "exploring" ? "" : renderAllDeviceResultsPanel(allRecommendations, answers);
  const printSummaryHtml = renderPrintSummary(
    recommendations,
    answers,
    pathway
  );

  const showPrev = index > 0;
  const showNext = index < recommendations.length - 1;

  const resultsIntroText =
    pathway === "exploring"
      ? (isSpanishLocale() ? getUiText("exploringResultsTitleText") : EXPLORING_RESULTS_TITLE_TEXT)
      : (isSpanishLocale() ? getUiText("resultsIntroText") : RESULTS_INTRO_TEXT);
  const resultsFocusSummary = getResultsFocusSummary(rec, answers, pathway);
  setResultsContext(rec.label);

  result.classList.remove("hidden");
  result.removeAttribute("role");
  result.removeAttribute("aria-labelledby");
  result.removeAttribute("aria-describedby");
  result.removeAttribute("tabindex");
  result.innerHTML = `
    <div id="resultsLive" class="visually-hidden" aria-live="polite" aria-atomic="true"></div>
    <p id="resultsFocusSummary" class="visually-hidden">${resultsFocusSummary}</p>
    <p id="resultsHeading" class="results-intro-heading" tabindex="-1" aria-describedby="resultsFocusSummary">${resultsIntroText}</p>

    ${cardHtml}

    ${allResultsPanelHtml}

    <div class="results-toolbar">
      <div class="results-pager">
        <button
          id="resultPrevBtn"
          type="button"
          class="results-arrow-btn ${showPrev ? "" : "hidden"}"
          aria-label="${isSpanishLocale() ? getUiText("previousRecommendation") : "Previous recommendation"}"
        >
          <span aria-hidden="true">&#8249;</span>
        </button>
        <p class="results-counter">${getDynamicCountLabel(index + 1, recommendations.length)}</p>
        <button
          id="resultNextBtn"
          type="button"
          class="results-arrow-btn ${showNext ? "" : "hidden"}"
          aria-label="${isSpanishLocale() ? getUiText("nextRecommendation") : "Next recommendation"}"
        >
          <span aria-hidden="true">&#8250;</span>
        </button>
      </div>

      <button
        type="button"
        class="results-restart-btn results-restart-btn-desktop"
        data-role="restart-results"
        aria-label="${isSpanishLocale() ? getUiText("startOver") : "Start over"}"
      >
        ${isSpanishLocale() ? getUiText("startOver") : "Start over"}
      </button>

      <button
        type="button"
        class="results-print-btn results-print-btn-desktop"
        data-role="print-results"
        aria-label="${isSpanishLocale() ? getUiText("printResults") : "Print results"}"
      >
        ${PRINT_ICON_SVG}
      </button>
    </div>

    <div class="results-actions-mobile">
      <button
        type="button"
        class="results-restart-btn results-restart-btn-mobile"
        data-role="restart-results"
        aria-label="${isSpanishLocale() ? getUiText("startOver") : "Start over"}"
      >
        ${isSpanishLocale() ? getUiText("startOver") : "Start over"}
      </button>

      <button
        type="button"
        class="results-print-btn results-print-btn-mobile"
        data-role="print-results"
        aria-label="${isSpanishLocale() ? getUiText("printResults") : "Print results"}"
      >
        ${PRINT_ICON_SVG}
      </button>
    </div>

    ${printSummaryHtml}
  `;

  const prevBtn = document.getElementById("resultPrevBtn");
  const nextBtn = document.getElementById("resultNextBtn");
  const restartBtns = document.querySelectorAll('[data-role="restart-results"]');
  const printBtns = document.querySelectorAll('[data-role="print-results"]');
  renderFooterDisclaimer();
  setFooterDisclaimerVisibility(true);

  const cardEl = result.querySelector(".recommendation-card");
  const allResultsPanel = result.querySelector(".all-results-panel");
  const resultsMethodology = result.querySelector(".results-methodology");
  const resultsHeading = result.querySelector("#resultsHeading");

  if (allResultsPanel) {
    bindDisclosureToggle(allResultsPanel, (expanded) => {
      APP_STATE.allResultsPanelOpen = expanded;
    });
  }

  if (resultsMethodology) {
    bindDisclosureToggle(resultsMethodology, (expanded) => {
      APP_STATE.resultsMethodologyOpen = expanded;
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (APP_STATE.currentResultIndex > 0) {
        APP_STATE.currentResultIndex -= 1;
        renderCurrentRecommendationPage();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (APP_STATE.currentResultIndex < recommendations.length - 1) {
        APP_STATE.currentResultIndex += 1;
        renderCurrentRecommendationPage();
      }
    });
  }

  restartBtns.forEach((restartBtn) => {
    restartBtn.addEventListener("click", () => {
      resetAppState();
      resetIntroState();
      renderQuestion();
    });
  });

  printBtns.forEach((printBtn) => {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  });

  announceResultsSummary(rec, answers, pathway);

  if (resultsHeading) {
    resultsHeading.focus();
  }

  bindMobileRecommendationSwipe(cardEl, recommendations.length);
}

function bindDisclosureToggle(rootEl, onToggle) {
  if (!rootEl) return;

  const buttonEl = rootEl.querySelector(".details-toggle-btn");
  const panelEl = rootEl.querySelector("[data-accordion-panel]");
  if (!buttonEl || !panelEl) return;

  const setExpanded = (expanded) => {
    buttonEl.setAttribute("aria-expanded", String(expanded));
    panelEl.hidden = !expanded;
    if (typeof onToggle === "function") {
      onToggle(expanded);
    }
  };

  const toggleExpanded = () => {
    setExpanded(buttonEl.getAttribute("aria-expanded") !== "true");
  };

  buttonEl.addEventListener("click", () => {
    toggleExpanded();
  });

  buttonEl.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();
    toggleExpanded();
  });

  setExpanded(buttonEl.getAttribute("aria-expanded") === "true");
}

function bindMobileRecommendationSwipe(cardEl, totalRecommendations) {
  if (!cardEl || window.innerWidth > 768 || totalRecommendations < 2) return;

  let touchStartX = 0;
  let touchStartY = 0;

  cardEl.addEventListener("touchstart", (event) => {
    const touch = event.changedTouches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
  }, { passive: true });

  cardEl.addEventListener("touchend", (event) => {
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartX;
    const deltaY = touch.clientY - touchStartY;

    if (Math.abs(deltaX) < 40 || Math.abs(deltaX) < Math.abs(deltaY)) return;

    if (deltaX < 0) {
      APP_STATE.currentResultIndex =
        (APP_STATE.currentResultIndex + 1) % totalRecommendations;
      renderCurrentRecommendationPage();
      return;
    }

    APP_STATE.currentResultIndex =
      (APP_STATE.currentResultIndex - 1 + totalRecommendations) % totalRecommendations;
    renderCurrentRecommendationPage();
  }, { passive: true });
}

function announceStepError(message) {
  const liveRegionEl = document.getElementById("stepErrorLive");
  if (!liveRegionEl) return;

  liveRegionEl.textContent = "";

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      if (document.getElementById("stepErrorLive") === liveRegionEl) {
        liveRegionEl.textContent = message;
      }
    });
  });
}

function submitCurrentAnswers() {
  const normalizedAnswers = normalizeAnswers(APP_STATE.answers);
  const scores = calculateScores(normalizedAnswers);
  const allRecommendations = getSortedRecommendations(scores, normalizedAnswers);
  const recommendations =
    normalizedAnswers.pathway === "exploring"
      ? allRecommendations
      : getTopRecommendations(allRecommendations);

  printCurrentResponseScores(normalizedAnswers, scores, allRecommendations);

  renderRecommendations(
    recommendations,
    allRecommendations,
    normalizedAnswers,
    scores,
    normalizedAnswers.pathway
  );
}

function advanceFromCurrentRadioQuestion(selectedValue) {
  clearStepError();

  const questionId = getCurrentQuestionId();
  APP_STATE.answers[questionId] = selectedValue;

  setTimeout(() => {
    const nextQuestionId = getAdjacentQuestionId(questionId, 1);

    if (nextQuestionId) {
      setCurrentStepToQuestion(nextQuestionId);
      renderQuestion();
      return;
    }

    submitCurrentAnswers();
  }, 120);
}

function getRenderedQuestionLabel(questionId) {
  return getQuestionLabelForPathway(questionId, getSelectedPathway());
}

function getRenderedQuestionOptions(questionId) {
  const question = getLocalizedQuestion(questionId);
  if (!question?.options) return [];

  const pathway = getSelectedPathway();
  const options = question.options.map((option) => ({ ...option }));

  if (questionId !== "primaryUse" || pathway !== "child") {
    return options;
  }

  const childAge = Number(APP_STATE.answers.ageInput);
  const showDeliveryOption = Number.isFinite(childAge) && childAge >= 18;

  return options
    .filter((option) => showDeliveryOption || option.value !== "deliveries")
    .map((option) =>
      option.value === "transport"
        ? {
            ...option,
            label: isSpanishLocale()
              ? getUiText("childTransportOptionLabel")
              : "School, commuting, or errands"
          }
        : option
    );
}

function setAppViewMode(mode) {
  document.body.classList.toggle("question-flow-active", mode === "question");
  document.body.classList.toggle("results-view-active", mode === "results");
}

function getLandingLocaleCopy() {
  return LANDING_PAGE_COPY[APP_STATE.locale] || LANDING_PAGE_COPY.en;
}

function updateLandingLanguageToggle() {
  const enBtn = document.getElementById("langEnBtn");
  const esBtn = document.getElementById("langEsBtn");
  const landingControls = document.getElementById("landingControls");
  const showLandingControls = APP_STATE.currentStep === 0;

  if (landingControls) {
    landingControls.classList.toggle("hidden", !showLandingControls);
  }

  if (enBtn) {
    const isActive = APP_STATE.locale === "en";
    enBtn.classList.toggle("is-active", isActive);
    enBtn.setAttribute("aria-pressed", String(isActive));
  }

  if (esBtn) {
    const isActive = APP_STATE.locale === "es";
    esBtn.classList.toggle("is-active", isActive);
    esBtn.setAttribute("aria-pressed", String(isActive));
  }
}

function renderFooterDisclaimer() {
  const footerDisclaimer = document.getElementById("footerDisclaimer");
  if (!footerDisclaimer) return;
  const feedbackText = (isSpanishLocale() ? getUiText("feedbackPromptText") : FEEDBACK_PROMPT_TEXT)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  footerDisclaimer.innerHTML = `
    <span
      class="recommendation-disclaimer-copy"
      aria-label="${isSpanishLocale() ? getUiText("scoringDisclaimerText") : SCORING_DISCLAIMER_TEXT}"
    >${isSpanishLocale() ? getUiText("scoringDisclaimerText") : SCORING_DISCLAIMER_TEXT}</span>
    <span
      class="recommendation-disclaimer-feedback"
      aria-label="${feedbackText}"
    >${isSpanishLocale() ? getUiText("feedbackPromptText") : FEEDBACK_PROMPT_TEXT}</span>
  `;
}

function setFooterDisclaimerVisibility(isVisible) {
  const footerDisclaimer = document.getElementById("footerDisclaimer");
  if (!footerDisclaimer) return;

  footerDisclaimer.classList.toggle("hidden", !isVisible);
}

function setLandingHeaderVisibility(isVisible) {
  const landingHeader = document.querySelector(".landing-header");
  if (!landingHeader) return;

  landingHeader.classList.toggle("hidden", !isVisible);
}

function renderLandingCopy() {
  const intro = document.getElementById("introText");
  const heroTitle = document.getElementById("heroTitle");
  const copy = getLandingLocaleCopy();

  document.documentElement.lang = APP_STATE.locale;
  renderLocaleChrome();

  if (heroTitle) {
    heroTitle.textContent = copy.heroTitle;
  }

  if (intro) {
    intro.textContent = copy.introText;
  }

  renderFooterDisclaimer();
  setFooterDisclaimerVisibility(true);
  setLandingHeaderVisibility(true);

  updateLandingLanguageToggle();
}

function renderQuestion() {
  const formStep = document.getElementById("formStep");
  const progress = document.getElementById("progress");
  const result = document.getElementById("result");
  const backBtn = document.getElementById("backBtn");
  const nextBtn = document.getElementById("nextBtn");
  const intro = document.getElementById("introText");
  const heroTitle = document.getElementById("heroTitle");

  if (!formStep || !progress || !backBtn || !nextBtn) return;

  setAppViewMode("question");
  renderLandingCopy();

  if (intro) {
    intro.classList.toggle("hidden", APP_STATE.currentStep > 0);
  }

  if (heroTitle) {
    heroTitle.classList.toggle("hidden", APP_STATE.currentStep > 0);
  }

  setLandingHeaderVisibility(APP_STATE.currentStep === 0);
  setFooterDisclaimerVisibility(APP_STATE.currentStep === 0);

  result.classList.add("hidden");
  result.innerHTML = "";

  const sequence = getCurrentSequence();
  const questionId = getCurrentQuestionId();
  const question = getLocalizedQuestion(questionId);
  const renderedOptions = getRenderedQuestionOptions(questionId);
  const renderedLabel = getRenderedQuestionLabel(questionId);
  const savedValue = APP_STATE.answers[questionId] || "";
  setQuestionContext(questionId);

  if (question.type === "radio") {
    const usesRouteImages = questionId === "routeType";
    const legendId = `${questionId}-legend`;
    const describedByIds = ["stepError"].join(" ");
    formStep.innerHTML = `
      <div class="question-block">
        <div id="stepErrorLive" class="visually-hidden" aria-live="assertive" aria-atomic="true"></div>
        <fieldset class="question-fieldset" ${describedByIds ? `aria-describedby="${describedByIds}"` : ""}>
          <legend id="${legendId}" class="question-label">${renderedLabel}</legend>
          <div class="option-grid option-grid-${Math.min(renderedOptions.length, 4)}">
            ${renderedOptions.map((option) => `
              <label class="option-card ${usesRouteImages ? "option-card--with-image" : ""}" for="${questionId}-${option.value}">
                <input
                  id="${questionId}-${option.value}"
                  class="option-card-input"
                  type="radio"
                  name="${questionId}"
                  value="${option.value}"
                  ${savedValue === option.value ? "checked" : ""}
                >
                ${usesRouteImages ? `
                  <span class="option-card-media">
                    <img
                      src="${ROUTE_OPTION_MEDIA[option.value].src}"
                      alt=""
                      class="option-card-image"
                    >
                  </span>
                ` : ""}
                <span id="${questionId}-${option.value}-label" class="option-card-text">${option.label}</span>
              </label>
            `).join("")}
          </div>
          <div id="stepError" class="error-message hidden" style="margin-top: 8px;"></div>
        </fieldset>
      </div>
    `;

    let pointerSelectionInProgress = false;

    const radioInputs = formStep.querySelectorAll(`input[name="${questionId}"]`);
    radioInputs.forEach((input) => {
      input.addEventListener("change", () => {
        if (pointerSelectionInProgress) {
          pointerSelectionInProgress = false;
          advanceFromCurrentRadioQuestion(input.value);
        }
      });

      input.addEventListener("keydown", (event) => {
        if (event.key !== "Enter") {
          pointerSelectionInProgress = false;
        }

        if (event.key !== "Enter") return;
        if (!input.checked) return;

        event.preventDefault();
        advanceFromCurrentRadioQuestion(input.value);
      });
    });

    const optionCards = formStep.querySelectorAll(".option-card");
    optionCards.forEach((card) => {
      const input = card.querySelector(`input[name="${questionId}"]`);
      if (!input) return;

      const markPointerSelection = () => {
        pointerSelectionInProgress = true;
      };

      card.addEventListener("pointerdown", markPointerSelection);
      card.addEventListener("mousedown", markPointerSelection);
      card.addEventListener("touchstart", markPointerSelection, { passive: true });

      card.addEventListener("click", () => {
        if (input.checked && APP_STATE.answers[questionId] === input.value) {
          pointerSelectionInProgress = false;
          advanceFromCurrentRadioQuestion(input.value);
        }
      });
    });
  }

 if (question.type === "number") {
 const describedByIds = ["stepError"].join(" ");
  formStep.innerHTML = `
    <div class="question-block">
      <div id="stepErrorLive" class="visually-hidden" aria-live="assertive" aria-atomic="true"></div>
      <label for="${questionId}" class="question-label">${renderedLabel}</label>
      <input
        id="${questionId}"
        type="text"
        inputmode="numeric"
        pattern="[0-9]*"
        autocomplete="off"
        spellcheck="false"
        value="${savedValue}"
        placeholder="${isSpanishLocale() ? getUiText("agePlaceholder") : "Enter age"}"
        ${describedByIds ? `aria-describedby="${describedByIds}"` : ""}
        style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid #d0d0d0; font-size: 15px; box-sizing: border-box;"
      />
      <div id="stepError" class="error-message hidden" style="margin-top: 8px;"></div>
    </div>
  `;

  const numberInput = document.getElementById(questionId);
  if (numberInput) {
    numberInput.focus();

    numberInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleNext();
      }
    });
  }
}

  backBtn.classList.toggle("hidden", APP_STATE.currentStep === 0);
  nextBtn.classList.toggle("hidden", question.type !== "number" && question.type !== "radio");
  backBtn.innerHTML = "&#8249;";
  nextBtn.innerHTML = "&#8250;";

  const formNav = document.getElementById("formNav");
  if (formNav) {
    const nextOnlyVisible =
      backBtn.classList.contains("hidden") &&
      !nextBtn.classList.contains("hidden");
    const bothNavButtonsHidden =
      backBtn.classList.contains("hidden") &&
      nextBtn.classList.contains("hidden");
    formNav.classList.toggle("form-nav--next-only", nextOnlyVisible);
    formNav.classList.toggle("hidden", bothNavButtonsHidden);
  }
}

function showStepError(message) {
  const errorEl = document.getElementById("stepError");
  if (!errorEl) return;

  errorEl.textContent = message;
  errorEl.classList.remove("hidden");
  announceStepError(message);

  const questionId = getCurrentQuestionId();
  const numberInput = document.getElementById(questionId);
  if (numberInput && getLocalizedQuestion(questionId)?.type === "number") {
    numberInput.setAttribute("aria-invalid", "true");
    numberInput.setAttribute("aria-errormessage", "stepError");
  }

  const radioInputs = document.querySelectorAll(`input[name="${questionId}"]`);
  radioInputs.forEach((input) => {
    input.setAttribute("aria-invalid", "true");
    input.setAttribute("aria-errormessage", "stepError");
  });
}

function clearStepError() {
  const errorEl = document.getElementById("stepError");
  if (!errorEl) return;

  errorEl.textContent = "";
  errorEl.classList.add("hidden");

  const liveRegionEl = document.getElementById("stepErrorLive");
  if (liveRegionEl) {
    liveRegionEl.textContent = "";
  }

  const questionId = getCurrentQuestionId();
  const numberInput = document.getElementById(questionId);
  if (numberInput && getLocalizedQuestion(questionId)?.type === "number") {
    numberInput.removeAttribute("aria-invalid");
    numberInput.removeAttribute("aria-errormessage");
  }

  const radioInputs = document.querySelectorAll(`input[name="${questionId}"]`);
  radioInputs.forEach((input) => {
    input.removeAttribute("aria-invalid");
    input.removeAttribute("aria-errormessage");
  });
}

function saveCurrentStepValue() {
  const questionId = getCurrentQuestionId();
  const question = getLocalizedQuestion(questionId);

  if (!question) return { valid: false, message: isSpanishLocale() ? "No se encontró la pregunta." : "Question not found." };

  if (question.type === "radio") {
    const selected = document.querySelector(`input[name="${questionId}"]:checked`);
    if (!selected) {
      return {
        valid: false,
        message: isSpanishLocale() ? getUiText("selectAnswerError") : "Please select an answer before continuing."
      };
    }

    APP_STATE.answers[questionId] = selected.value;

    if (questionId === "pathway") {
      APP_STATE.currentStep = 0;
    }

    return { valid: true };
  }

  if (question.type === "number") {
    const input = document.getElementById(questionId);
    const rawValue = input?.value?.trim() || "";
    const age = Number(rawValue);
    const leadingZerosPattern = /^0\d+$/;
    const digitsOnlyPattern = /^\d+$/;

    if (rawValue === "") {
      return {
        valid: false,
        message: isSpanishLocale() ? getUiText("enterAgeError") : "Please enter an age before continuing."
      };
    }

    if (leadingZerosPattern.test(rawValue)) {
      return {
        valid: false,
        message: isSpanishLocale()
          ? getUiText("enterAgeLeadingZerosError")
          : "Please enter a whole number age without zeros in the beginning."
      };
    }

    if (!digitsOnlyPattern.test(rawValue) || !Number.isInteger(age)) {
      return {
        valid: false,
        message: isSpanishLocale()
          ? getUiText("enterWholeAgeError")
          : "Please enter a whole number age without decimals."
      };
    }

    if (age < question.min || age > question.max) {
      return {
        valid: false,
        message: isSpanishLocale()
          ? `${getUiText("enterAgeBetweenPrefix")} ${question.min} ${getUiText("enterAgeBetweenJoin")} ${question.max}.`
          : `Please enter an age between ${question.min} and ${question.max}.`
      };
    }

    APP_STATE.answers[questionId] = rawValue;
    return { valid: true };
  }

  return { valid: false, message: isSpanishLocale() ? "Este tipo de pregunta no es compatible." : "Unsupported question type." };
}

function handleNext() {
  clearStepError();

  const currentQuestionId = getCurrentQuestionId();
  const validation = saveCurrentStepValue();

  if (!validation.valid) {
    showStepError(validation.message);
    return;
  }

  const nextQuestionId = getAdjacentQuestionId(currentQuestionId, 1);

  if (nextQuestionId) {
    setCurrentStepToQuestion(nextQuestionId);
    renderQuestion();
    return;
  }

  submitCurrentAnswers();
}

function handleBack() {
  clearStepError();

  const result = document.getElementById("result");
  if (result && !result.classList.contains("hidden")) {
    renderQuestion();
    return;
  }

  const currentQuestionId = getCurrentQuestionId();
  const previousQuestionId = getAdjacentQuestionId(currentQuestionId, -1);

  if (previousQuestionId) {
    setCurrentStepToQuestion(previousQuestionId);
    renderQuestion();
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.getElementById("backBtn");
  const nextBtn = document.getElementById("nextBtn");
  const langEnBtn = document.getElementById("langEnBtn");
  const langEsBtn = document.getElementById("langEsBtn");
  
  if (backBtn) {
    backBtn.addEventListener("click", handleBack);
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", handleNext);
  }

  if (langEnBtn) {
    langEnBtn.addEventListener("click", () => {
      APP_STATE.locale = "en";
      renderQuestion();
    });
  }

  if (langEsBtn) {
    langEsBtn.addEventListener("click", () => {
      APP_STATE.locale = "es";
      renderQuestion();
    });
  }

  renderQuestion();
});

function getVisibleQuestionKeys(answers) {
  if (answers.pathway === "exploring") {
    return ["pathway"];
  }

  const keys = [
    "pathway",
    "ageInput"
  ];

  if (
    answers.pathway === "myself" ||
    answers.pathway === "someoneElse" ||
    answers.pathway === "child"
  ) {
    keys.push("adaptiveNeed");
  }

  keys.push("primaryUse");

  if (answers.primaryUse === "transport") {
    keys.push("transitLink");
  }

  keys.push(
    "carryChildren",
    "distance",
    "routeType",
    "storage"
  );

  return keys;
}
