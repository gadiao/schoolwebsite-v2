"use client";

import * as React from "react";
import PropTypes from "prop-types";
import { Box, Tab, Tabs } from "@mui/material";
import { EventsAccordion } from "./EventsAccordion";

const aug = [
  {
    title: "Board Meeting",
    date: "August 24, 7:00 PM - 9:00 PM",
    dateStart: "2023-08-24T19:00:00Z",
    dateEnd: "2023-08-24T21:00:00Z",
    addr: "Stapledon Gardens, Albatross Road",
    desc: "I’m an event description. Click here to open up the Event Editor and change my text.",
    url: "#",
  },
];

const sept = [
  {
    title: "Labour Day",
    date: "September 4, All Day",
    dateStart: "2023-09-04",
    dateEnd: "2023-09-04",
    addr: "Stapledon Gardens, Albatross Road",
    desc: "I’m an event description. Click here to open up the Event Editor and change my text.",
    url: "#",
  },
  {
    title: "First Day of School for Students",
    date: "September 5, All Day",
    dateStart: "2023-09-05",
    dateEnd: "2023-09-05",
    addr: "Stapledon Gardens, Albatross Road",
    desc: "I’m an event description. Click here to open up the Event Editor and change my text.",
    url: "#",
  },
  {
    title: "Governance and Policy Committee Meeting",
    date: "September 5, 7:00 PM - 9:00 PM",
    dateStart: "2023-09-05T19:00:00Z",
    dateEnd: "2023-09-05T21:00:00Z",
    addr: "Stapledon Gardens, Albatross Road",
    desc: "I’m an event description. Click here to open up the Event Editor and change my text.",
    url: "#",
  },
  {
    title: "Board Meeting",
    date: "September 7, 7:00 PM - 9:00 PM",
    dateStart: "2023-09-07T19:00:00Z",
    dateEnd: "2023-09-07T21:00:00Z",
    addr: "Stapledon Gardens, Albatross Road",
    desc: "I’m an event description. Click here to open up the Event Editor and change my text.",
    url: "#",
  },
];

const oct = [
  {
    title: "Student Achievement Committee Meeting",
    date: "October 12, 10:00AM  - 10:00 PM",
    dateStart: "2023-10-12T10:00:00Z",
    dateEnd: "2023-10-12T22:00:00Z",
    addr: "Stapledon Gardens, Albatross Road", 
    desc: "I’m an event description. Click here to open up the Event Editor and change my text.",
    url: "#",
  },
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const MonthTabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`month-tabpanel-${index}`}
      aria-labelledby={`month-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

MonthTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `month-tab-${index}`,
    "aria-controls": `month-tabpanel-${index}`,
  };
};

const MonthsTab = (props) => {
  const [monthIndex, setMonthIndex] = React.useState(9);
  const [indexMobile, setIndexMobile] = React.useState(3);

  const handleChange = (event, newValue) => {
    setMonthIndex(newValue);
    if (newValue >= 6) {
      setIndexMobile(newValue - 6)
    } else {
      setIndexMobile("");
    }
  };

  const handleChangeMobile = (event, newValue) => {
    setMonthIndex(newValue + 6);
    setIndexMobile(newValue);
  };

  return (
    <div>
      <Box sx={{ display: { xs: "none", lg: "block" } }}>
        <Tabs
          value={monthIndex}
          onChange={handleChange}
          aria-label="months tab"
          centered
        >
          
            {months.map((month, index) => (
              <Tab
                label={month}
                key={month}
                sx={{ typography: "h6" }}
                {...a11yProps(index)}
              />
            ))}
        </Tabs>
      </Box>
      <Box sx={{ display: { xs: "block", lg: "none" } }}>
        <Tabs
          value={monthIndex}
          onChange={handleChange}
          aria-label="months tab"
          centered
        >
            {months.slice(0, 6).map((month, index) => (
              <Tab
                label={month}
                key={month}
                sx={{ typography: "h6" }}
                {...a11yProps(index)}
              />
            ))}
        </Tabs>
        <Tabs
          value={indexMobile}
          onChange={handleChangeMobile}
          aria-label="months tab"
          centered
        >
            {months.slice(6, ).map((month, index) => (
              <Tab
                label={month}
                key={month}
                sx={{ typography: "h6" }}
                {...a11yProps(index + 6)}
              />
            ))}
        </Tabs>
      </Box>
      {/* dynamically hook up to database */}
      <MonthTabPanel value={monthIndex} index={7} key={7}>
        <EventsAccordion events={aug} />
      </MonthTabPanel>
      <MonthTabPanel value={monthIndex} index={8} key={8}>
        <EventsAccordion events={sept} />
      </MonthTabPanel>
      <MonthTabPanel value={monthIndex} index={9} key={9}>
        <EventsAccordion events={oct} />
      </MonthTabPanel>
    </div>
  );
};

export { MonthsTab };
