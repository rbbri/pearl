import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import BrunchMenuPreview from './preview-templates/BrunchMenuPreview'
import EveningMenuPreview from './preview-templates/EveningMenuPreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('brunch-menu', BrunchMenuPreview)
CMS.registerPreviewTemplate('evening-menu', EveningMenuPreview )