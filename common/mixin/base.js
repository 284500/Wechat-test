import $Time from '@/common/time.js'
export default {
	filters: {
		formatTime(value) {
			return $Time.gettime(value)
		}
	}
}