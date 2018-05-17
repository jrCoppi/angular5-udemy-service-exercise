//service é uma classe padrão do typescript
export class CounterService {
   nrStatusChanged = 0;

   incremetnStatusChange() {
      this.nrStatusChanged++;
      console.log(this.nrStatusChanged);
   }
}
