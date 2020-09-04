import {FormGroup} from '@angular/forms';
import {isFuture, parseISO, startOfDay} from 'date-fns';


export function DiscontinuedValidator(discontinuedControlName: string, nextRunControlName: string) {
  return (group: FormGroup) => {
    const discontinuedControl = group.controls[discontinuedControlName];
    const nextRunControl = group.controls[nextRunControlName];

    const discontinuedValue = discontinuedControl.value;
    const nextRunValue = parseISO(nextRunControl.value);
    const valid = !discontinuedValue || !isFuture(startOfDay(nextRunValue));

    return valid ? null : { discontinuedWithFutureNextRun : true };
  };
}
