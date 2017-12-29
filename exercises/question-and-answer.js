
var tester = function(data) {
    this.test = function (input) {
        input = input.trim_ending_period();
        
        if (input.doesnt_end_with('nohougaii')) {
            return correction.with_text('Please finish the sentence with a full のほうがいい')
        }

        var verb = Verb.in_te_form(input);

        if (verb.not_found) {
            
        }

        if (verb.is_in_form(Verb.form.te)) {
            return CorrectAnswer;
        }
    };
    
    this.name = 'no hou ga ii';
}

module.exports = tester;