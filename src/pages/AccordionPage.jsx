import Accordion from "../components/Accordion";
function AccordionPage() {
  const items = [
    {
      id:1,
      label:"can i use you?",
      content:"it realy depends on"
    },
    {
      id:2,
      label:"can i use you?",
      content:"it realy depends on it realy depends on it realy depends on it realy depends on"
    },
    { id:3,
      label:"can i use you?",
      content:"it realy depends on"
    },
  ]
  return(
    <div>
      <Accordion items={items} />
    </div>
  )
}

export default AccordionPage;
