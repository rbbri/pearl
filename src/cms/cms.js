import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import BrunchPagePreview from './preview-templates/BrunchPagePreview'
import EveningPagePreview from './preview-templates/EveningPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('brunch', BrunchPagePreview)
CMS.registerPreviewTemplate('evening', EveningPagePreview )