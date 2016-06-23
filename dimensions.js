import _Dimensions from '/../react-native/Libraries/Utilities/Dimensions';

const Dimensions = {
		getWidth: function(){
			return _Dimensions.get('window').width;
		},

		getWidthPercent: function( num ){
			const width = this.getWidth();
			const singlePercentual = width / 100;
			return  singlePercentual * num;
		},

		calculationWidth: function( num ){
			if( !num ){
				return null;
			}

			if( num.search( '%' ) === -1 ){
				return JSON.parse( num );
			}else{
				num = num.replace( '%', '' );
				return this.getWidthPercent( num );
			}
		},

		getHeight: function(){
			return _Dimensions.get('window').height;
		},

		getHeightPercent: function( num ){
			const height = this.getHeight();
			const singlePercentual = height / 100;
			return singlePercentual * num;
		}
};

module.exports = Dimensions;
