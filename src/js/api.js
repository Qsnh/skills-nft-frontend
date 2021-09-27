import utils from '@/js/utils';

export default {
    Skills: {
        mint(from) {
            return utils.SkillsContract().methods.claimAvailableSet().send({
                from: from
            });
        },
    }
}