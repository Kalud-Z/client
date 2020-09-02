import { Pipe, PipeTransform } from '@angular/core';
import { startOfDay, startOfToday , parseISO , addDays , isToday , isFuture , isBefore } from 'date-fns'


@Pipe({
  name: 'takePlaceSoon'
})
export class TakePlaceSoonPipe implements PipeTransform {
  transform(value: string, soon: number = 7): boolean {
    const date = parseISO(value);
    const nextRun = startOfDay(date);
    const notSoonAnymore = addDays(startOfToday(), soon + 1);
    return isToday(nextRun) || isFuture(nextRun) && isBefore(nextRun, notSoonAnymore);
  }

}
