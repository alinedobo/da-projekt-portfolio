import { Service } from '@angular/core';
import { createClient } from '@supabase/supabase-js';

@Service()
export class CrudService {
    supabase = createClient(
        'https://hmbyjzebgujwmnqdpone.supabase.co',
        'sb_publishable_YrJFr21-nEvAE8W71d9AFg_gkneBICS',
    );

    async saveContactRequest(request:{name: string, email: string, message: string}) {
        const { data, error } = await this.supabase
            .from('frontend')
            .insert([request])
            .select();
    }
}
