import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
@Pipe({ name: 'dateFormatPipe' })
// Date Format Pipe
export class DateFormatPipe implements PipeTransform {
    transform(projetList: Array<any>, startDate: string | null, endDate: string | null): Array<any> {
        var filteredArray = new Array();
        var datePipe = new DatePipe("en-US");
        startDate = datePipe.transform(startDate, 'dd/MM/yyyy');
        endDate = datePipe.transform(endDate, 'dd/MM/yyyy');
        if (projetList && projetList.length) {
            projetList.forEach(proj => {
                var projectStartDate = datePipe.transform(proj.dateDebut, 'dd/MM/yyyy');
                var projectEndDate = datePipe.transform(proj.dateFin, 'dd/MM/yyyy')
            });
        }
        return filteredArray;
    }
}
