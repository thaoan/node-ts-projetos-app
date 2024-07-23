
import { CronJob } from 'cron';


type CronTime = string | Date;
type OnTick = () => void;



export class CronService {

    static createJob ( cronTime : CronTime, onTick : OnTick ): CronJob {
        


        const job = new CronJob( cronTime,onTick); // cronTime
            
                const date = new Date();
                console.log('4 second', date);
      

        job.start();

        return job;
    }
}