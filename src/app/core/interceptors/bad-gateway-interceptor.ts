import { HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { catchError, Observable, of, tap, throwError } from "rxjs";
import { inject } from "@angular/core";
import { Router } from "@angular/router";

export function badGatewayInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error) => {
      if (error.status === 502) {
        router.navigateByUrl('maintenance');
      }
      return of(null)
    })
  );
}
