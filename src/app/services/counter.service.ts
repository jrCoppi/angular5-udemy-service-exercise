//service é uma classe padrão do typescript
export class CounterService {
   nrStatusChanged = 0;

//incrementa status e loga
   incremetnStatusChange() {
      this.nrStatusChanged++;
      console.log(this.nrStatusChanged);
   }
}
