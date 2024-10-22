import { format, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale';

export const formattedDateAndTime = (date: string) => {
  return format(parseISO(date), 'dd MMMM yyyy - HH:mm')
}

export const formattedDate = (date: string) => {
  const dateISO = parseISO(date);

  return format(dateISO, 'dd \'de\' MMMM', { locale: pt })
}