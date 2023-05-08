import Box from '@mui/material/Box';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import React, { useState } from 'react';
import {
  DateSelectArg,
  EventApi,
  EventClickArg,
  formatDate,
} from '@fullcalendar/core';
import Typography from '@mui/material/Typography';
import useTheme from '@mui/material/styles/useTheme';
import { InewTheme } from '../../../../../7-Shared/assets/mui/WithTheme';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

interface ICalendarComponent {}

const CalendarComponent: React.FC<ICalendarComponent> = (props) => {
  const theme = useTheme() as InewTheme;
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

  const handleDateClick = (selected: DateSelectArg) => {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.start.toString()}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected: EventClickArg) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box sx={{ display: 'flex', jusctifyContent: 'space-between' }}>
      <Box
        sx={{
          flex: '1 1 20%',

          borderRadius: '4px',
          backgroundColor: `${theme.palette.additionalColors.primary[400]}`,
        }}
        p="15px"
      >
        <Typography variant="h5">Events</Typography>
        <List>
          {currentEvents.map((event) => (
            <ListItem
              key={event.id}
              sx={{
                backgroundColor:
                  theme.palette.additionalColors.greenAccent[500],
                margin: '10px 0',
                borderRadius: '2px',
              }}
            >
              <ListItemText
                primary={event.title}
                secondary={
                  <Typography>
                    {event.start &&
                      formatDate(event.start, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box flex="1 1 100%" ml="15px">
        <FullCalendar
          height="75vh"
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
          ]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          select={handleDateClick}
          eventClick={handleEventClick}
          eventsSet={(events) => setCurrentEvents(events)}
          initialEvents={[
            {
              id: '12315',
              title: 'All-day event',
              date: '2023-06-14',
            },
            {
              id: '12317',
              title: 'All-day event',
              date: '2023-07-14',
            },

            {
              id: '5123',
              title: 'Timed event',
              date: '2023-05-28',
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default CalendarComponent;
