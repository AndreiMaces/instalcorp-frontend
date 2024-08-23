import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export function badGatewayInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error) => {
      if (error.status === 0) {
        router.navigateByUrl('maintenance', {
          skipLocationChange: true,
        });
      }
      return of(null);
    }),
  );
}
