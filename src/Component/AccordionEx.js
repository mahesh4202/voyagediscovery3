import React from 'react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box } from '@chakra-ui/react'
import { BiMinus, BiPlus } from 'react-icons/bi'

const commonStyles = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 10,
  width: '100%',
  height: '4rem',
};
const AccordionEx = () => {
  return (
    <div className='container'>
      <Accordion allowToggle>
      <div className='my-3'>
        <h1>Frequently Asked Questions (FAQs)</h1>
      </div>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton sx={{ ...commonStyles, borderRadius: 10 }}>
            <Box fontSize='24px' as='span' flex='1' textAlign='left'>
            How do I book a flight/hotel/car rental?
            </Box>
            {isExpanded ? (
              <BiMinus fontSize='24px' />
            ) : (
              <BiPlus fontSize='24px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign='left'>
        You can book directly through our website by entering your travel details (dates, destination, number of travelers) and selecting from available options. Follow the prompts to complete your reservation securely.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton sx={{ ...commonStyles, borderRadius: 10 }}>
            <Box fontSize='24px' as='span' flex='1' textAlign='left'>
            What payment methods do you accept?
            </Box>
            {isExpanded ? (
              <BiMinus fontSize='24px' />
            ) : (
              <BiPlus fontSize='24px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign='left'>
        We accept major credit and debit cards, such as Visa, MasterCard, American Express, and sometimes PayPal or other digital wallets depending on the region and service provider.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton sx={{ ...commonStyles, borderRadius: 10 }}>
            <Box fontSize='24px' as='span' flex='1' textAlign='left'>
            Can I make changes to my booking?
            </Box>
            {isExpanded ? (
              <BiMinus fontSize='24px' />
            ) : (
              <BiPlus fontSize='24px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign='left'>
        Yes, you can typically make changes to your booking online. Log in to your account, navigate to your booking details, and look for options to modify dates, upgrade rooms, or add extras. Fees may apply depending on the changes and the provider's policies.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton sx={{ ...commonStyles, borderRadius: 10 }}>
            <Box fontSize='24px' as='span' flex='1' textAlign='left'>
            What should I do if I encounter a problem during my trip?
            </Box>
            {isExpanded ? (
              <BiMinus fontSize='24px' />
            ) : (
              <BiPlus fontSize='24px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign='left'>
        Contact our customer support team immediately. We provide 24/7 assistance through phone, email, or live chat to help resolve any issues you may encounter, from flight delays to accommodation problems.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton sx={{ ...commonStyles, borderRadius: 10 }}>
            <Box fontSize='24px' as='span' flex='1' textAlign='left'>
            Do I need travel insurance?
            </Box>
            {isExpanded ? (
              <BiMinus fontSize='24px' />
            ) : (
              <BiPlus fontSize='24px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign='left'>
        While not mandatory, travel insurance is highly recommended to protect against unforeseen events such as trip cancellations, medical emergencies abroad, or lost luggage. We offer optional travel insurance during the booking process.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>
    </div>
  )
}

export default AccordionEx
