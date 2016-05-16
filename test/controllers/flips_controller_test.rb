require 'test_helper'

class FlipsControllerTest < ActionController::TestCase
  test "should get home" do
    get :homes
    assert_response :success
    assert_select "title", "-Flip"
  end


  test "should get login" do
    get :login
    assert_response :success
    assert_select "title", "Sign in -Flip"
  end

end
