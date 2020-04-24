export const appendLengthMixin = {
    computed: {
        appendLength() {
            return this.secondText + " (" + this.secondText.length + ")";
        }
    }
}