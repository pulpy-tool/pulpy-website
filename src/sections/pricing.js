/** @jsx jsx */
import { useState, useCallback } from 'react';
import { keyframes } from '@emotion/core';
import { jsx, Box, Grid, Container, Flex, Text, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import PriceTable from 'components/cards/price-table';
import Switch from 'components/switch';

const data = [
  {
    id: 1,
    title: 'Free',
    subtitle: 'Test Drive Data your prospects [50 Credits] / 1 User',
    amount: {
      monthly: 0.00,
      annual: 0.00 * 1,
    },
    isRecommended: false,
    buttonText: 'Start Free Trial',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Direct phone numbers',
      },
      {
        id: 2,
        isAvailable: true,
        title: `Email addresses`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Basic prospecting platform`,
      },
      {
        id: 4,
        isAvailable: false,
        title: `Basic team management`,
      },
      {
        id: 5,
        isAvailable: false,
        title: `Shared credit pool
        `,
      },
    ],
  },
  {
    id: 2,
    title: 'Pro',
    subtitle: 'Essential for finding your prospects [480 Credits] / 1 User',
    amount: {
      monthly: 400,
      annual: 400 * 12 - 10,
    },
    isRecommended: true,
    buttonText: 'Choose Plan',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Direct phone numbers',
      },
      {
        id: 2,
        isAvailable: true,
        title: `Email addresses`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Basic prospecting platform`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Basic team management`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `Shared credit pool`,
      },
    ],
  },
  {
    id: 3,
    title: 'Premium',
    subtitle: 'Small teams with simple workflows [960 Credits] / 1 User',
    amount: {
      monthly: 612,
      annual: 612 * 12 - 10,
    },
    isRecommended: false,
    buttonText: 'Choose Plan',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Prospecting bulk show',
      },
      {
        id: 2,
        isAvailable: true,
        title: `Extension bulk show`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Basic usage analytics`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `CSV enrichment`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `Advanced team management`,
      },
    ],
  },
];

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handlePlan = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <Box as="section" id="pricing" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="What deal suit you perfect"
          description="Meet our pricing plan"
        />
        <Flex sx={styles.priceSwitcher}>
          <Text as="span">Monthly Plan</Text>
          <Switch isMonthly={isMonthly} handlePlan={handlePlan} />
          <Text as="span">Annual Plan</Text>
        </Flex>
        <Box sx={styles.priceWrapper}>
          {data?.map((price, index) => (
            <PriceTable
              price={price}
              isAnnual={!isMonthly}
              key={`${isMonthly}-${index}`}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  section: {
    backgroundColor: '#F9FAFC',
    pt: [11],
    pb: [11],
  },
  heading: {
    mb: 3,
    h2: {
      fontSize: [6, null, null, 8],
    },
    p: {
      color: '#858B91',
      fontSize: 3,
      m: ['10px auto', null, null, '0 auto'],
    },
  },
  priceSwitcher: {
    display: 'flex',
    alignItems: 'center',
    margin: [
      '35px auto 50px',
      null,
      null,
      '0 auto 30px',
      null,
      '60px auto 50px',
    ],
    maxWidth: 300,
    p: 2,
    span: {
      color: 'text',
      fontWeight: 500,
      outline: 0,
      p: 0,
      minHeight: 'auto',
    },
  },
  priceWrapper: {
    display: ['block', null, null, 'flex'],
    alignItems: 'center',
    justifyContent: 'center',
    '.priceCard': {
      '.priceHeader': {
        animation: `${fadeIn} 0.8s linear`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s linear`,
      },
      '.priceAmount': {
        animation: `${fadeIn} 0.9s linear`,
      },
      '.priceButton': {
        animation: `${fadeIn2} 0.7s linear`,
      },
    },
  },
};
