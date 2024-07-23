import { CheckService } from '../domain/use-cases/checks/check-service';
import { CronService } from './cron/cron-service';

export class Server{

    public static start()  {

        console.log('Server started');

    CronService.createJob(
        '*/5 * * * *', // run every 5 seconds
        () => {
            const url = 'http://google.com'; // Replace with your actual URL
            new CheckService(
                () => console.log(`${url} is ok`),
                    (error) => console.error('error'),
                
            ).execute(url); // Replace with your actual URL
            //new CheckService().execute('http://localhost:3000'); // Replace with your actual URL
        }
    );        

}

}

