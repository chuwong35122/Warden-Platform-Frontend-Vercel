export interface StepperSteps {
  step: number
  header: string
  label: string
}

export const COMPLETE_MODE_STEPS: StepperSteps[] = [
  {
    step: 1,
    header: "Upload Assets",
    label: "Upload and edit your assets"
  },
  {
    step: 2,
    header: "Complete Form",
    label: "General information about ticket NFTs"
  },
  {
    step: 3,
    header: "Add Utility",
    label: "Customize NFT with Warden's utility"
  }
]

export const LAYERED_MODE_STEPPER = [
  {
    step: 1,
    header: "Upload Assets",
    label: "Upload each layer"
  },
  {
    step: 2,
    header: "Customize Layers",
    label: "Customize each layer info"
  },
  {
    step: 3,
    header: "Complete Form",
    label: "General information about ticket NFTs"
  },
  {
    step: 4,
    header: "Add utility",
    label: "Customize NFT with Warden's utility"
  },
  {
    step: 5,
    header: "Preview",
    label: "Preview your tickets"
  }
]

export const MINI_LAYERED_FORM_STEPS = [
  {
    step: 1,
    title: "General settings"
  },
  {
    step: 2,
    title: "About the Ticket"
  },
  {
    step: 3,
    title: "Assets Settings"
  }
]

export const CREATE_EVENT_STEPS: StepperSteps[] = [
  {
    step: 1,
    header: "Event Details",
    label: "Information about your event"
  },
  {
    step: 2,
    header: "Event Itinerary",
    label: "Date, time, and location of your event"
  },
  {
    step: 3,
    header: "Event Ticket",
    label: "Select a suitable ticket for your event"
  }
]
